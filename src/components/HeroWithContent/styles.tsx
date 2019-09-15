import styled from 'styled-components'
import { padding } from 'polished'
import { palette } from 'variables/palette'
import { SCProps } from '.'
import { variables } from 'variables/variables'

const handleImgDir = modifier => {
	switch (modifier) {
		case 'left':
			return `
			margin-left: auto; 
			`
		case 'bottom':
			return `
			margin-right: auto; 
			margin-left: auto; 
			`

		default:
			return `
			margin-right: auto; 
			`
	}
}

const handleContentDir = modifier => {
	switch (modifier) {
		case 'left':
			return `
			left: 0; 
			`
		case 'bottom':
			return `
			bottom: 0; 
			top: auto;
			transform: translateY(50%);
			`
		default:
			return `
			right: 0; 
			`
	}
}

export const SCHeroWithContent = styled('section')<SCProps>`
	display: flex;
	position: relative;
	alignitems: center;
	justify-content: center;
	width: 100%;
`

export const SCImageWrap = styled('img')<SCProps>`
	width: ${variables.grid10col};
	${({ contentPosition }) => handleImgDir(contentPosition)};
`

export const SCContentWrap = styled('div')<SCProps>`
	position: absolute;
	width: ${variables.grid4col};
	background: ${palette.brandWhite};
	${padding(variables.whitespaceSmallBase)};
	border-radius: ${variables.borderRadiusLarge};
	top: 50%;
	transform: translateY(-50%);
	${({ contentPosition }) => handleContentDir(contentPosition)};
`
