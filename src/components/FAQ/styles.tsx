import styled from 'styled-components'
import { palette } from 'variables'
import { H4, P } from 'Typography'

const SCFAQWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	border-top: 1px solid ${palette.brandBlackLight};
`

const SCFAQ = styled('button')`
	-webkit-appearance: none;
	background: none;
	border: none;
	border-bottom: 1px solid ${palette.brandBlackLight};
`

const FAQTitle = styled(H4)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const FAQContent = styled(P)``

export { SCFAQWrapper, SCFAQ, FAQContent, FAQTitle }
