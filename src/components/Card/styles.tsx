import styled from 'styled-components'
import { Props } from './index'
import { palette, variables } from 'variables'
import { padding } from 'polished'

const SCCardBase = styled('article')<Props>`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid ${palette.brandBlackLight};
	border-radius: ${variables.borderRadiusBase};
	box-shadow: ${variables.cardShadow};
	${padding(variables.whitespaceSmallLess, variables.whitespaceLargeBase)};
	background-color: ${palette.brandWhite};
	max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'none')};
`

export default SCCardBase
