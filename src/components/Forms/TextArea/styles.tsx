import styled from 'styled-components'
import { padding } from 'polished'
import { variables, palette, typography } from 'variables/index'

const SCInput = styled('input')`
	border: 1px solid ${palette.brandBlack};
	padding: ${variables.whitespaceSmallest};
	border-radius: ${variables.borderRadiusBase};
	${padding(variables.whitespaceSmall, variables.whitespaceSmall)};
`

const SCLabel = styled('label')`
	border: 1px;
	position: absolute;
	background: ${palette.brandWhite};
	left: 10px;
	top: -9px;
	font-size: ${typography.iota} ${padding(0, variables.whitespaceSmall)};
`

const SCFieldWrap = styled('div')`
	display: flex;
	position: relative;
`

const SCSelect = styled('select')`
	display: flex;
	position: relative;
`

const SCOption = styled('option')`
	display: flex;
	position: relative;
`

export { SCInput, SCLabel, SCFieldWrap, SCSelect, SCOption }
