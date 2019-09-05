import React from 'react'
import { SCHeroWithContent } from './styles'

export interface SCProps {
	contentPosition?: string
}

interface ConProps {
	content: any
	image: any
}

type Props = SCProps & ConProps

const HeroWithContent: React.SFC<Props> = ({ image, content }) => {
	return (
		<SCHeroWithContent>
			{content}
			{image}
		</SCHeroWithContent>
	)
}

export { HeroWithContent }
