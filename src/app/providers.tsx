'use client'

import StyledComponentsRegistry from '@/styles/registry'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import { AlertContextProvider } from '@/context/AlertContext'

const Providers = (props: React.PropsWithChildren) => {
	return (
		<StyledComponentsRegistry>
			<ThemeProvider theme={theme}>
				<AlertContextProvider>{props.children}</AlertContextProvider>
			</ThemeProvider>
		</StyledComponentsRegistry>
	)
}

export default Providers
