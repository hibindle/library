import styled from 'styled-components'
import { padding } from 'polished'
import { palette } from '../../variables/palette'
import { variables } from '../../variables/variables'

const StyledHeader = styled.header({
	display: `flex`,
	alignItems: `center`,
	border: `1px solid red`,
	background: palette.brandRed,
	...padding(variables.whitespaceSmallBase)
})

export default StyledHeader
