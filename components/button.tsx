"use client"
import { kv } from "@vercel/kv"
import styled from "styled-components"

const theme = {
	blue: {
		default: "#3f51b5",
		hover: "#283593",
	},
	pink: {
		default: "#e91e63",
		hover: "#ad1457",
	},
}

const Button = styled.button`
	background-color: ${(props) => theme["pink"].default};
	color: white;
	padding: 5px 15px;
	border-radius: 5px;
	outline: 0;
	border: 0;
	text-transform: uppercase;
	margin: 10px 0px;
	cursor: pointer;
	box-shadow: 0px 2px 2px lightgray;
	transition: ease background-color 250ms;
	&:hover {
		background-color: ${(props) => theme["pink"].hover};
	}
	&:disabled {
		cursor: default;
		opacity: 0.7;
	}
`

export default async function MyButton(props: { name: string }) {
	const viewInc = async () => await kv.incr(props.name)
	return <Button onClick={viewInc}>I love you += 1</Button>
}
