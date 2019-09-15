import React from 'react'
import { camelCase } from 'lodash'
import { SCInput, SCLabel, SCFieldWrap } from './styles'

export interface Props {
	type: string
	name: string
	placeholder?: string
}

export const Input: React.FunctionComponent<Props> = ({
	type,
	name,
	placeholder
}) => {
	return (
		<SCFieldWrap>
			<SCInput
				id={camelCase(name)}
				type={type}
				name={camelCase(name)}
				placeholder={placeholder}
			/>
			<SCLabel htmlFor={camelCase(name)}>{name}</SCLabel>
		</SCFieldWrap>
	)
}

export default Input
