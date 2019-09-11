import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './index'

const variations = [
	{ text: 'Outline button', modifier: 'outline' },
	{ text: 'Default button', modifier: '' },
	{ text: 'Black button', modifier: 'black' },
	{ text: 'Black outline', modifier: 'outlineBlack' }
]

storiesOf('Button', module).add('Variations', () => (
	<div className="BNDSB-story-wrapper">
		{variations.map(btn => (
			<div className="BNDSB-comp-wrapper">
				<Button modifier={btn.modifier} onClick={action('clicked')}>
					{btn.text}
				</Button>
			</div>
		))}
	</div>
))
