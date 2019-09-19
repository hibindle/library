import React from 'react'
import { SCButton } from './styles'
import { Url } from 'url'

export interface LinkProps {
	href?: Url
	modifier?: string
}

const LinkAsButton: React.FunctionComponent<LinkProps> = ({
	children,
	href,
	modifier
}) => {
	return (
		<SCButton as="a" modifier={modifier} href={href}>
			{children}
		</SCButton>
	)
}

export default LinkAsButton
