import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearch } from '../hooks/Search'
import { Superhero } from '@/src/DTOs/superHero'
import { Card } from '@/src/components/Card'

export default function Home() {
  const [allData, setAllData] = useState<Superhero[]>([])
  const [filteredData, setFilteredData] = useState<Superhero[]>([])
  const { searchValue = '' } = useSearch()

  const [selectedHeroes, setSelectedHeroes] = useState<number[]>([])

  const handleSelect = (heroId: number, isSelected: boolean) => {
    if (isSelected) {
      // Adicionar herói à lista de heróis selecionados
      setSelectedHeroes([...selectedHeroes, heroId])
    } else {
      // Remover herói da lista de heróis selecionados
      setSelectedHeroes(selectedHeroes.filter((id) => id !== heroId))
    }
  }

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
      // Se searchValue estiver vazio, mostrar todos os heróis
      setFilteredData(allData)
    } else {
      // Filtrar heróis com base no searchValue
      const filteredHeros = allData.filter(
        (superHero) =>
          superHero.name.toLowerCase() === searchValue.toLowerCase(),
      )
      setFilteredData(filteredHeros)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    filterData()
  }, [searchValue, allData])

  return (
    <div className="flex flex-col gap-6">
      <h1 className="m-auto sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bangers">
        Escolha seus Super-Heróis
      </h1>
      <div className="flex gap-6 flex-wrap justify-center">
        {filteredData.map((superHero) => (
          <Card
            superhero={superHero}
            key={superHero.id}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  )
}
