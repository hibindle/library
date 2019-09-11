import React from 'react'
import { storiesOf } from '@storybook/react'
import { HeroWithContent } from './HeroWithContent'

const content = <div>hi</div>
const imgUrl = `//images.unsplash.com/photo-1562184760-a11b3cf7c169?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80`

storiesOf('Hero With Content', module)
	.add('Content Right', () => (
		<div className="BNDSB-page-wrapper">
			<HeroWithContent
				contentPosition="right"
				content={content}
				image={imgUrl}
			></HeroWithContent>
		</div>
	))
	.add('Content Left', () => (
		<div className="BNDSB-page-wrapper">
			<HeroWithContent
				contentPosition="left"
				content={content}
				image={imgUrl}
			></HeroWithContent>
		</div>
	))
	.add('Content Bottom', () => (
		<div className="BNDSB-page-wrapper">
			<HeroWithContent
				contentPosition="bottom"
				content={content}
				image={imgUrl}
			></HeroWithContent>
		</div>
	))
