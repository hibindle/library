import styled from 'styled-components'
import { palette } from '../../variables/palette'
import { SCProps } from './HeroWithContent'

export const SCHeroWithContent = styled('section')<SCProps>`
	display: flex;
	alignitems: center;
	background: ${palette.brandRed};
`
