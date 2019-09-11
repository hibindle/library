import React from 'react'
import StyledButton from './styles'

export interface SCProps {
	modifier?: string
}

export interface BtnProps {
	onClick: any
	children: any
}

type Props = SCProps & BtnProps

export const Button: React.FunctionComponent<Props> = ({
	children,
	onClick,
	modifier
}) => {
	return (
		<StyledButton modifier={modifier} onClick={onClick}>
			{children}
		</StyledButton>
	)
}

export default Button
