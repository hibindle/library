import styled from 'styled-components'
import { SCProps } from './index'
import { padding, margin } from 'polished'
import { variables, typography, palette } from 'variables'

const handleBtnType = modifier => {
	switch (modifier) {
		case 'outline':
			return `
			color: ${palette.brandRed}; 
			background: transparent;
			&:hover {
				background: ${palette.brandRedLight};
				color: ${palette.brandWhite};
			}
			`
		case 'outlineBlack':
			return `
			color: ${palette.brandBlack}; 
			border-color: ${palette.brandBlack}
			background: transparent;
			&:hover {
				background: ${palette.brandBlack};
				color: ${palette.brandWhite};
			}
			`
		case 'black':
			return `
			color: ${palette.brandWhite}; 
			background: ${palette.brandBlack};
			&:hover {
				background: ${palette.brandBlackLight};
			}
			`
		default:
			return `
			color: ${palette.brandWhite}; 
			background: ${palette.brandRed};
			&:hover {
    		background: ${palette.brandRed};
  		}
			`
	}
}

const SCButton = styled('button')<SCProps>`
	display: block;
	white-space: nowrap;
	text-align: center;
	vertical-align: bottom;
	color: ${palette.brandWhite};
	${padding(variables.whitespaceSmallLess, variables.whitespaceLargeBase)};
	${margin(variables.whitespaceSmallLess, null, null)};

	border: 1px solid;
	outline: none;
	border-radius: ${variables.borderRadiusXLarge};
	font-family: 'IBM Plex Mono';
	font-size: ${typography.eta};
	cursor: pointer;
	transition: background-color 0.2s ease;
	${({ modifier }) => handleBtnType(modifier)};
`

export default SCButton
