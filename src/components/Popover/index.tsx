import * as React from 'react'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import { InfoIcon } from 'lucide-react'

interface PopoverProps {
  powerstats: {
    intelligence: number
    strength: number
    speed: number
    durability: number
    power: number
    combat: number
  }
}
export function BasicPopover({ powerstats }: PopoverProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <button
        className="text-violet-500 hover:text-red-600 flex gap-2"
        onClick={handleClick}
      >
        Atributos de habilidade
        <InfoIcon />
      </button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
          <div className="flex flex-col gap-4">
            <p>Inteligência: {powerstats.intelligence} </p>
            <p>Força: {powerstats.strength} </p>
            <p>Velocidade: {powerstats.speed}</p>
            <p>Durabilidade: {powerstats.durability} </p>
            <p>Poder: {powerstats.power} </p>
            <p>Combate: {powerstats.combat} </p>
          </div>
        </Typography>
      </Popover>
    </div>
  )
}
