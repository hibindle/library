import styled from 'styled-components'
import { palette } from '../../variables/palette'

const StyledButton = styled.button({
	display: `flex`,
	alignItems: `center`,
	border: `1px solid red`,
	background: palette.brandRed
})

export default StyledButton
