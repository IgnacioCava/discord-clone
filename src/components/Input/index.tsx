import * as React from 'react'
import { InputContainer, ErrorMessage, InputField, RequiredField } from './styles'

interface IInputProps {
	label: string
	name: string
	required?: boolean
	placeholder?: string
	error?: string
	type?: React.HTMLInputTypeAttribute
}

export const Input = ({ label, name, required, placeholder, error, type }: IInputProps) => {
	return (
		<InputContainer>
			<label htmlFor={name}>
				{label}
				{error ? <ErrorMessage> - {error}</ErrorMessage> : required && <RequiredField> *</RequiredField>}
			</label>
			<InputField
				type={type}
				name={name}
				placeholder={placeholder}
			/>
		</InputContainer>
	)
}
