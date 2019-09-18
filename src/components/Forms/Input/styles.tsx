import styled from 'styled-components'
import { padding } from 'polished'
import { variables, palette } from 'variables'

const SCInput = styled('input')`
	border: 1px solid ${palette.brandBlack};
	padding: ${variables.whitespaceSmallest};
	border-radius: ${variables.borderRadiusBase};
	${padding(variables.whitespaceSmall, variables.whitespaceSmall)};
`

export { SCInput }
