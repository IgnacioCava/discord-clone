'use client'

import { useAuth } from '@/hooks/auth/useAuth'
import { Input } from 'components'
import Link from 'next/link'
import { AuthContainer, AuthForm, AuthTitle, ForgotPassword, SubmitButton, ChangeAuthLink } from '../styles'

export default function Login() {
	const { login } = useAuth()

	return (
		<AuthContainer>
			<AuthTitle>Hi again!</AuthTitle>
			<AuthForm onSubmit={login}>
				<Input
					label='email or phone number'
					name='email'
					required
					error={''}
				/>
				<div>
					<Input
						type='password'
						label='password'
						name='password'
						required
					/>
					<ForgotPassword>Forgot your password?</ForgotPassword>
				</div>

				<SubmitButton>Log in</SubmitButton>
			</AuthForm>
			<ChangeAuthLink>
				Need an account? <Link href={'signup'}>Sign up</Link>
			</ChangeAuthLink>
		</AuthContainer>
	)
}
