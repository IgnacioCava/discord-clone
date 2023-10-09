'use client'

import { AlertContext } from '@/context/AlertContext'
import { useContext } from 'react'
import { AlertContainer } from './style'

export interface IAlertProps {}

export function Alert() {
	const { message, errorType, display } = useContext(AlertContext)

	return (
		<AlertContainer $display={display}>
			{message}, {errorType}
		</AlertContainer>
	)
}
