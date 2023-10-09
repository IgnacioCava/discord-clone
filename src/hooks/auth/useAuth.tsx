import { AlertContext } from '@/context/AlertContext'
import axios, { AxiosError } from 'axios'
import { FormEvent, useContext } from 'react'
import { signIn } from 'next-auth/react'

export const useAuth = () => {
	const { showAlert } = useContext(AlertContext)

	const register = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const data = new FormData(event.currentTarget)
		axios.post('/api/register', Object.fromEntries(data)).catch((error: AxiosError) => {
			const message = error.response?.data as string
			if (message) showAlert(message, 'error')
		})
	}

	const login = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const data = Object.fromEntries(new FormData(event.currentTarget))

		signIn('credentials', { ...data, redirect: false }).then((callback) => {
			if (callback?.error) showAlert(callback?.error, 'error')
			else if (callback?.ok) showAlert('ok', 'message')
		})

		// axios.post('/api/login', data).catch((error: AxiosError) => {
		// 	const message = error.response?.data as string
		// 	if (message) showAlert(message, 'error')
		// })
	}

	return {
		register,
		login
	}
}
