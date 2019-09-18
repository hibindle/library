import styled from 'styled-components'
import { Props } from './index'
import { padding } from 'polished'
import { variables, palette } from 'variables'

const SCTextArea = styled('textarea')<Props>`
	border: 1px solid ${palette.brandBlack};
	padding: ${variables.whitespaceSmallest};
	border-radius: ${variables.borderRadiusBase};
	${padding(variables.whitespaceSmall, variables.whitespaceSmall)};
	resize: ${({ resizeable }) => (resizeable ? 'both' : 'none')};
`

export { SCTextArea }
