import { useState } from 'react'
import Image from 'next/image'
import { InfoIcon } from 'lucide-react'
import { Superhero } from '@/src/DTOs/superHero'

interface CardProps {
  superhero: Superhero
  onSelect: (id: number) => void
  isSelected: boolean
}

export function Card({ superhero, onSelect, isSelected = false }: CardProps) {
  const handleClick = () => {
    onSelect(superhero.id)
    isSelected = !isSelected
  }
  return (
    <div
      className={`
    group
    inline-block pb-4 bg-gradient-to-tr from-zinc-800 to-zinc-700 text-white overflow-hidden rounded-2xl shadow
    hover:shadow-md
    transition
    ${isSelected ? 'border-4 border-blue-400' : ''} // Adicione esta linha
  `}
      onClick={handleClick} // Adicione esta linha para lidar com o clique
    >
      <figure className="max-h-64 aspect-square overflow-hidden">
        <Image
          className="w-full h-full object-cover transition group-hover:scale-125"
          src={superhero.images.lg}
          alt={`Imagem de ${superhero.name}`} // Aqui, você fornece um texto significativo
          height={200}
          width={200}
        />
      </figure>
      <div className="p-4">
        <h3 className="text-xl font-bold">{superhero.name}</h3>
        <p className="font-serif">{superhero.biography.publisher}</p>
      </div>
      <footer className="flex gap-2 px-4">
        <button className="text-blue-400 hover:text-red-600 flex gap-2">
          Mais detalhes
          <InfoIcon />
        </button>
      </footer>
    </div>
  )
}
