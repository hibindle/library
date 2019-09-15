import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './Input'

storiesOf('Forms', module).add('Inputs', () => (
	<div className="BNDSB-comp-wrapper">
		<Input type="text" name="First Name" />
		<Input type="email" name="Email" />
	</div>
))
