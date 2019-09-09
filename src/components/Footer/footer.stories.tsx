import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './index'

storiesOf('Button', module).add('Default', () => (
	<div className="BNDSB-wrapper">
		<Button onClick={action('clicked')}>Hi there</Button>
	</div>
))
