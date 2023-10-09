'use client'

import styled from 'styled-components'

export const AuthLayoutStyle = styled.div`
	display: flex;
	height: 100%;
`

export const AuthContainer = styled.main`
	background-color: #313338;
	padding: 32px;
	margin: auto;
	width: fit-content;
	width: 450px;
	border-radius: 5px;
`

export const AuthTitle = styled.h1`
	font-size: 24px;
	font-weight: 600;
	text-align: center;
	margin-bottom: 20px;
`

export const AuthForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 8px;
`

export const ForgotPassword = styled.div`
	color: #00a8fc;
	font-size: 14px;
	font-weight: 400;
	margin-top: 4px;
`

export const SubmitButton = styled.button`
	background-color: #5865f2;
	padding: 2px 16px;
	height: 44px;
	font-size: 16px;
	font-weight: 500;
	font-family: inherit;
	border-radius: 3px;
	cursor: pointer;
`

export const ChangeAuthLink = styled.span`
	font-size: 14px;
	font-weight: 400;
	color: #949ba4;
	a {
		color: #00a8fc;
	}
`
