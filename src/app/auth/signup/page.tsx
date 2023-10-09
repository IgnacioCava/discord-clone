'use client'

import { useAuth } from '@/hooks/auth/useAuth'
import { Input } from 'components'
import Link from 'next/link'
import { AuthContainer, AuthForm, AuthTitle, ChangeAuthLink, SubmitButton } from '../styles'

export default function SignUp() {
	const { register } = useAuth()

	return (
		<AuthContainer>
			<AuthTitle>Create an account</AuthTitle>
			<AuthForm onSubmit={register}>
				<Input
					type='email'
					label='email'
					name='email'
					required
					error={''}
				/>
				<Input
					label='username'
					name='name'
					required
					error={''}
				/>
				<Input
					type='password'
					label='password'
					name='password'
					required
				/>

				<SubmitButton>Sign up</SubmitButton>
			</AuthForm>
			<ChangeAuthLink>
				<Link href={'login'}>Already got an account?</Link>
			</ChangeAuthLink>
		</AuthContainer>
	)
}
