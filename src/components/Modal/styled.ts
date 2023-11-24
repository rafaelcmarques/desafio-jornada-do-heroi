import styled from 'styled-components'
import backgroundImg from '@/src/assets/vs.jpg'

export type ContainerProps = {
  winner?: boolean
}

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url(${backgroundImg.src});
  background-size: contain; /* Ajuste para cobrir inteiramente a modal */
  background-color: #9ca3aa;
  position: fixed;
  z-index: 10;
  width: 1000px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`
export const HeroContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  position: relative;
`
export const HeroInfos = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background-color: white;
  width: 256px;
  height: 260px;
  top: 230px;
  border-radius: 8px;
`

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  padding: 10px 0;
`

export const Winner = styled.h1`
  font-size: 32px;
  font-weight: bold;

  color: gold;
`
