import React from 'react'
import { storiesOf } from '@storybook/react'
import { HeroWithContent } from './HeroWithContent'

const content = <div>hi</div>

storiesOf('Hero With Content', module)
	.add('Content Right', () => (
		<div className="BNDSB-wrapper">
			<HeroWithContent
				contentPosition="right"
				content={content}
				image={'wassup'}
			></HeroWithContent>
		</div>
	))
	.add('Content Left', () => (
		<HeroWithContent
			contentPosition="left"
			content={content}
			image="wassup"
		></HeroWithContent>
	))
	.add('Content Bottom', () => (
		<HeroWithContent
			contentPosition="bottom"
			content={content}
			image="wassup"
		></HeroWithContent>
	))
