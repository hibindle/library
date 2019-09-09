import styled from 'styled-components'
import { palette } from '../../variables/palette'
import { padding } from 'polished'
import { variables } from '../../variables/variables'

const SCButton = styled('button')`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${palette.brandWhite};
	background: ${palette.brandRed};
	padding: ${padding(
		variables.whitespaceSmall,
		variables.whitespaceSmallLess
	)};
	border: none;
	outline: none;
	border-radius: ${variables.borderRadiusBase};
	font-family: 'IBM Plex Mono';
`

export default SCButton
