import React from 'react'
import useCopy from '../../../copy2context/useCopy'
import { SCButton } from './styles'

export interface BtnProps {
	onClick?: any
	modifier?: string
}

const Button: React.FunctionComponent<BtnProps> = ({
	children,
	onClick,
	modifier
}) => {
	const { getCopy } = useCopy('about')
	return (
		<SCButton modifier={modifier} onClick={onClick}>
			{getCopy('graph')}

			{/* {children} */}
		</SCButton>
	)
}

export default Button
