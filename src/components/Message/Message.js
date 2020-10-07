import React from 'react';
import { Container } from './styles';

export default function Message ({ children }) {
	return (
		<Container>
			{ children }
		</Container>
	);
}