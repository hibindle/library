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

export const Button: React.SFC<Props> = ({ onClick, children }) => {
	return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button
