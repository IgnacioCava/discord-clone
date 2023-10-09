'use client'

import styled from 'styled-components'

export const InputContainer = styled.div`
	background-color: #313338;
	display: flex;
	flex-direction: column;
	gap: 8px;
	label {
		color: #b5bac1;
		text-transform: uppercase;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.02em;
	}
`

export const RequiredField = styled.span`
	color: #f23f42;
`

export const ErrorMessage = styled.span`
	font-size: 12px;
	font-weight: 400;
	font-style: italic;
	text-transform: none;
	color: #fa777c;
`

export const InputField = styled.input`
	background-color: #1e1f22;
	padding: 10px;
	height: 40px;
	border-radius: 3px;
	color: #dbdee1;
	font-size: 15px;
	font-weight: 400;
`
