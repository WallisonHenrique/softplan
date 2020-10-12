import React, { useState } from 'react';
import { Form, Input, Label } from './styles';

export default function Search ({ search }) {
	const [ term, setTerm ] = useState("");

	const handleChange = event => setTerm( event.target.value );

	const submit = event => {
		event.preventDefault();
		search(term);
	}

	return (
		<Form data-testid="search" onSubmit={ submit }>
			<Label htmlFor="term">Pesquisar por país</Label>
			<Input
				onChange={ handleChange } 
				type="text" 
				placeholder="Pesquisar por país..."
				value={ term }
				id="term"
			/>
		</Form>
	);
}