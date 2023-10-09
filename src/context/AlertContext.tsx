'use client'

import { createContext, ReactNode, FC, useState, useRef } from 'react'

type ErrorType = 'error' | 'warning' | 'message' | null

interface IAlertContextValues {
	message: string | null
	errorType: ErrorType
	display: boolean
	showAlert: (message: string | null, errorType: ErrorType) => void
}

const defaultAlertContextValue = {
	message: null,
	errorType: null,
	display: false,
	showAlert: () => null
}

export const AlertContext = createContext<IAlertContextValues>(defaultAlertContextValue)

export interface ContextProps {
	children: ReactNode
}

export const AlertContextProvider: FC<ContextProps> = ({ children }) => {
	const [alertValue, setAlert] = useState<Omit<IAlertContextValues, 'showAlert'>>({
		message: null,
		errorType: null,
		display: false
	})

	const alertTimer = useRef<NodeJS.Timeout>()

	const resetAlert = () => setAlert({ message: null, errorType: null, display: false })

	const showAlert: IAlertContextValues['showAlert'] = (message, errorType) => {
		if (alertTimer) clearTimeout(alertTimer.current)
		setAlert({
			message,
			errorType,
			display: true
		})

		console.log(message)

		alertTimer.current = setTimeout(() => {
			resetAlert()
		}, 4000)
	}

	const alertProps = {
		...alertValue,
		showAlert
	}

	if (AlertContext) return <AlertContext.Provider value={alertProps}>{children}</AlertContext.Provider>
}
