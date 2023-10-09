'use client'

import styled from 'styled-components'

interface IAlertContainer {
	$display: boolean
}

export const AlertContainer = styled.div<IAlertContainer>`
	display: ${(props) => !props.$display && 'none'};
	background-color: grey;
	color: black;
	padding: 10px;
	width: fit-content;
	border-radius: 5px;
	position: absolute;
	right: 10px;
	top: 10px;
`
