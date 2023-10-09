import type { Metadata } from 'next'
import { AuthLayoutStyle } from './styles'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return <AuthLayoutStyle>{children}</AuthLayoutStyle>
}