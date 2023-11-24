import React, { useEffect } from 'react'
import Image from 'next/image'

import {
  Container,
  Overlay,
  HeroContainer,
  HeroInfos,
  Title,
  Winner,
} from './styled'
import { Superhero } from '@/src/DTOs/superHero'

interface ModalProps {
  choosenHeroes: Superhero[]
  closeModal: () => void
}

export function Modal({ choosenHeroes, closeModal }: ModalProps) {
  const calculateTotalStats = (powerstats: {
    [key: string]: number
  }): number => {
    return Object.values(powerstats).reduce((total, value) => total + value, 0)
  }

  const totalStatsHero1 = calculateTotalStats(choosenHeroes[0].powerstats)
  const totalStatsHero2 = calculateTotalStats(choosenHeroes[1].powerstats)

  const winner =
    totalStatsHero1 > totalStatsHero2 ? choosenHeroes[0] : choosenHeroes[1]

  const handleModalClose = () => {
    closeModal()
  }
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <>
      <Overlay onClick={handleModalClose} />
      <Container>
        <HeroContainer winner={winner === choosenHeroes[0]}>
          {winner === choosenHeroes[0] && <Winner>Vencedor</Winner>}
          <Image
            className="w-64 h-96 object-fill transition group-hover:scale-125 rounded-lg"
            src={choosenHeroes[0].images.lg}
            alt={`Imagem de ${choosenHeroes[0].name}`}
            height={500}
            width={500}
          />
          <HeroInfos>
            <Title>{choosenHeroes[0].name}</Title>
            <p>Inteligência: {choosenHeroes[0].powerstats.intelligence} </p>
            <p>Força: {choosenHeroes[0].powerstats.strength} </p>
            <p>Velocidade: {choosenHeroes[0].powerstats.speed}</p>
            <p>Durabilidade: {choosenHeroes[0].powerstats.durability} </p>
            <p>Poder: {choosenHeroes[0].powerstats.power} </p>
            <p>Combate: {choosenHeroes[0].powerstats.combat} </p>
          </HeroInfos>
        </HeroContainer>
        <HeroContainer winner={winner === choosenHeroes[1]}>
          {winner === choosenHeroes[1] && <Winner>Vencedor</Winner>}
          <Image
            className="w-64 h-96 object-fill transition group-hover:scale-125 rounded-lg"
            src={choosenHeroes[1].images.sm}
            alt={`Imagem de ${choosenHeroes[0].name}`}
            height={500}
            width={500}
          />
          <HeroInfos>
            <Title>{choosenHeroes[1].name}</Title>
            <p>Inteligência: {choosenHeroes[1].powerstats.intelligence} </p>
            <p>Força: {choosenHeroes[1].powerstats.strength} </p>
            <p>Velocidade: {choosenHeroes[1].powerstats.speed}</p>
            <p>Durabilidade: {choosenHeroes[1].powerstats.durability} </p>
            <p>Poder: {choosenHeroes[1].powerstats.power} </p>
            <p>Combate: {choosenHeroes[1].powerstats.combat} </p>
          </HeroInfos>
        </HeroContainer>
      </Container>
    </>
  )
}
