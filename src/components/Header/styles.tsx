import styled from 'styled-components'
import { padding } from 'polished'
import { variables } from 'variables/variables'

const SCHeader = styled('header')`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${padding(variables.whitespaceSmallBase)};
`

const SCHeaderContent = styled('div')`
	display: flex;
	align-items: center;
	justify-content: center;
`

export { SCHeader, SCHeaderContent }
