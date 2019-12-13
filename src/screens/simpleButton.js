import styled, { css } from 'styled-components'
import defaultImg from '../images/room-1.jpeg'

const StyleHero = styled.header`
min-height: calc(100vh - 68px) ;
background: url(${props=>props.img}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`

export default StyleHero