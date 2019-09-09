import * as React from 'react'
import { configure, addDecorator } from '@storybook/react'
import GlobalStyle from '../src/GlobalStyle'
import './storybook.css'

const req = require.context('../src', true, /.stories.tsx$/)

const withGlobals = story => (
	<>
		<GlobalStyle />
		{story()}
	</>
)

function loadStories() {
	req.keys().forEach(req)
}

addDecorator(withGlobals)
configure(loadStories, module)
