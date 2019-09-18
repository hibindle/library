import styled from 'styled-components'
import { padding } from 'polished'
import { variables, palette, typography } from 'variables/index'

const FieldWrap = styled('div')`
	display: flex;
	position: relative;
`
const SCLabel = styled('label')`
	border: 1px;
	position: absolute;
	background: ${palette.brandWhite};
	left: 10px;
	top: -9px;
	font-size: ${typography.iota} ${padding(0, variables.whitespaceSmall)};
`

export { FieldWrap, SCLabel }
