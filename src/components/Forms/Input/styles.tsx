import styled from 'styled-components'
import { variables } from 'variables/variables'

const SCInput = styled('input')`
	border: 1px solid ${variables};
`

const SCLabel = styled('label')`
	border: 1px;
`

const SCFieldWrap = styled('div')`
	display: flex;
`

export { SCInput, SCLabel, SCFieldWrap }
