import Image from 'next/image'
import { Superhero } from '@/src/DTOs/superHero'
import { BasicPopover } from '../Popover'

interface CardProps {
  superhero: Superhero
  onSelect: (isSelected: boolean) => void
  isSelected: boolean
}

export function Card({ superhero, onSelect, isSelected }: CardProps) {
  function handleSelection() {
    onSelect(!isSelected)
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
      onClick={handleSelection}
    >
      <figure className="max-h-64 aspect-square overflow-hidden">
        <Image
          className="w-full h-full object-cover transition group-hover:scale-125"
          src={superhero.images.lg}
          alt={`Imagem de ${superhero.name}`}
          height={200}
          width={200}
        />
      </figure>
      <div className="p-4">
        <h3 className="text-xl font-bold">{superhero.name}</h3>
        <p className="font-serif">{superhero.biography.publisher}</p>
      </div>
      <footer className="flex gap-2 px-4">
        <BasicPopover powerstats={superhero.powerstats} />
      </footer>
    </div>
  )
}
