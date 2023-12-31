import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useSearch } from '../hooks/Search'
import { Superhero } from '@/src/DTOs/superHero'
import { Card } from '@/src/components/Card'
import { Modal } from '@/src/components/Modal'
import { PaginationOutlined } from '@/src/components/Pagination'

export default function Home() {
  const [allData, setAllData] = useState<Superhero[]>([])
  const [filteredData, setFilteredData] = useState<Superhero[]>([])
  const [selectedHeros, setSelectedHeroes] = useState<Superhero[]>([])
  const { searchValue = '' } = useSearch()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  async function fetchData() {
    try {
      const response = await axios.get(
        'http://homologacao3.azapfy.com.br/api/ps/metahumans',
      )
      setAllData(response.data)
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error)
    }
  }

  function filterData() {
    if (searchValue.trim() === '') {
      setFilteredData(allData)
    } else {
      const filteredHeros = allData.filter((superHero) =>
        superHero.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
      setFilteredData(filteredHeros)
    }
  }

  function handleSelection(data: Superhero) {
    try {
      if (selectedHeros.some((superHero) => superHero.id === data.id)) {
        const removedHeroArray = selectedHeros.filter(
          (superHero) => superHero.id !== data.id,
        )
        setSelectedHeroes(removedHeroArray)
      } else {
        if (selectedHeros.length >= 2) {
          const message = 'Só é possível selecionar dois heróis'
          toast.error(message)
          throw new Error(message)
        }

        toast.success(`Herói ${data.name} selecionado.`)

        setSelectedHeroes((prevSelectedHeroes) => [...prevSelectedHeroes, data])
      }
    } catch (error) {
      console.log(error)
    }
  }

  function handleCloseModal() {
    setSelectedHeroes([])
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    filterData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, allData])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)

  function handleChangePagination(
    _: React.ChangeEvent<unknown>,
    value: number,
  ) {
    setCurrentPage(value)
  }

  return (
    <div className="flex flex-col gap-6">
      <Toaster />
      {selectedHeros.length === 2 && (
        <Modal
          choosenHeroes={selectedHeros}
          closeModal={() => handleCloseModal()}
        />
      )}

      <h1 className="m-auto sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bangers">
        Escolha seus Super-Heróis
      </h1>
      <div className="flex gap-6 flex-wrap justify-center">
        {currentItems.map((superHero) => (
          <Card
            superhero={superHero}
            key={superHero.id}
            onSelect={() => handleSelection(superHero)}
            isSelected={selectedHeros.some((hero) => hero.id === superHero.id)}
          />
        ))}
      </div>

      <PaginationOutlined
        currentPage={currentPage}
        handleChange={handleChangePagination}
        totalPages={Math.ceil(filteredData.length / itemsPerPage)}
      />
    </div>
  )
}
