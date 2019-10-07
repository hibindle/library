import React, { useContext } from 'react'
import { configure, addDecorator } from '@storybook/react'
import GlobalStyle from '../src/GlobalStyle'
import './storybook.css'
import Theme from '../src/theme'
import { ThemeProvider } from 'styled-components'
import { CopyProvider } from '../copy2context'
import copy from '../src/copy'
const req = require.context('../src', true, /.stories.tsx$/)

function loadStories() {
	req.keys().forEach(req)
}

addDecorator(story => (
	<ThemeProvider theme={Theme}>
		<CopyProvider copy={copy}>
			<GlobalStyle />
			{story()}
		</CopyProvider>
	</ThemeProvider>
))

configure(loadStories, module)
