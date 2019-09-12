import styled from 'styled-components'
import { palette } from '../variables/palette'
import { margin } from 'polished'
import { variables } from '../variables/variables'
import { typography } from '../variables/typography'

interface TypeProps {
	color?: string
}

const sharedTypeStyles = color => {
	return `
  color: ${color ? palette[color] : palette.copyDark};
  font-family: 'IBM Plex Sans';
	${margin(0, 0, variables.whitespaceSmall)};
  `
}

const H1 = styled('h1')<TypeProps>`
	font-size: ${typography.giga} ${({ color }) => sharedTypeStyles(color)};
`

const H2 = styled('h2')<TypeProps>`
	font-size: ${typography.kilo} ${({ color }) => sharedTypeStyles(color)};
`

const P = styled('p')<TypeProps>`
	font-size: ${typography.zeta} ${({ color }) => sharedTypeStyles(color)};
`

const Bold = styled(P)<TypeProps>`
	font-weight: 500;
`

const Light = styled(P)<TypeProps>`
	font-weight: 300;
`

const A = styled('a')<TypeProps>`
	font-size: ${typography.zeta};
	${({ color }) => sharedTypeStyles(color)};
	border-bottom: 2px solid ${palette.brandRed};
`

export { H1, H2, P, Bold, Light, A }
