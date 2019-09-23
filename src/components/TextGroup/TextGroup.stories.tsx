import React from 'react'
import { storiesOf } from '@storybook/react'
import TextGroup from './index'

const styles = {
	maxWidth: `900px`,
	display: `flex`,
	margin: '0 auto',
	padding: '30px',
	justifyContent: `space-around`
}

storiesOf('TextGroup', module).add('Default', () => (
	<div className="BNDSB-page-wrapper">
		<div style={styles}>
			<TextGroup title={'Isaac Martin'} content={'Isaac Martin'} />
			<TextGroup title={'Isaac Martin'} content={'Isaac Martin'} />
			<TextGroup title={'Isaac Martin'} content={'Isaac Martin'} />
		</div>
	</div>
))
