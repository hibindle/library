import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './index'

storiesOf('Button', module).add('Variations', () => (
	<div className="BNDSB-story-wrapper">
		<div className="BNDSB-comp-wrapper">
			<Button onClick={action('clicked')}>Default Button</Button>
		</div>
		<div className="BNDSB-comp-wrapper">
			<Button modifier="outline" onClick={action('clicked')}>
				Outline Button
			</Button>
		</div>
		<div className="BNDSB-comp-wrapper">
			<Button modifier="black" onClick={action('clicked')}>
				Black Button
			</Button>
		</div>
		<div className="BNDSB-comp-wrapper">
			<Button modifier="outlineBlack" onClick={action('clicked')}>
				Outline Button Black
			</Button>
		</div>
	</div>
))
