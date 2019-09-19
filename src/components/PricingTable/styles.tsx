import styled from 'styled-components'
import { palette } from 'variables'

const SCPricing = styled('div')`
	display: flex;
	align-items: center;
	border: 1px solid red;
	background: ${palette.brandRed};
`

const SCPriceList = styled('ul')``

const SCPriceItem = styled('li')``

export { SCPricing, SCPriceList, SCPriceItem }
