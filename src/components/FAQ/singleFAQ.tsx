import React, { useState } from 'react'
import { SCFAQ, FAQContent, FAQTitle } from './styles'

export interface FAQProps {
	title: string
	content: string
}

const FAQ: React.FunctionComponent<FAQProps> = ({ title, content }) => {
	const [isOpen, setOpen] = useState(false)
	// const icon = isOpen ? <Plus/> : <Minus/>
	const icon = isOpen ? '+' : '-'

	return (
		<SCFAQ onClick={() => setOpen(!isOpen)}>
			<FAQTitle>
				{title}
				<span>{icon}</span>
			</FAQTitle>
			{isOpen && <FAQContent>{content}</FAQContent>}
		</SCFAQ>
	)
}

export default FAQ
