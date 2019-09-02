import React from 'react'
import StyledHeader from './styles'
import Logo from '../../icons/Logo'

const Header = ({ children }) => {
	return (
		<StyledHeader>
			<Logo />
			<div>{children}</div>
		</StyledHeader>
	)
}

export default Header
