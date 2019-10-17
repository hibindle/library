import styled from 'styled-components'
import { padding } from 'polished'

const SCHeader = styled('header')(({ theme }) => ({
	display: `flex`,
	alignItems: `center`,
	justifyContent: `spaceBetween`,
}))

const SCHeaderContent = styled('div')(() => ({
	display: `flex`,
	alignItems: `center`,
	justifyContent: `center`
}))

export { SCHeader, SCHeaderContent }
