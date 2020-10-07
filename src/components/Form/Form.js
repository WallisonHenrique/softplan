import React, { useReducer } from 'react';
import { Container, Group, Label, Field, Btn } from './styles';

export default function Form ({ country, edit }) {
	const name = country.nameTranslations[0].value;
	const { flag, capital, area, population, topLevelDomains } = country;

	const [ fields, setFields ] = useReducer(( fields, field ) => ({ ...fields, ...field }),
		{ flag: flag.svgFile, name, capital, area, population, topLevelDomains: topLevelDomains[0].name }
	);

	const change = event => setFields({[ event.target.name ]: event.target.value });

	const submit = event => {
		const edited = {
			...country,
			nameTranslations: [{ ...country.nameTranslations[0], value: fields.name }], 
			flag: { ...flag, svgFile: fields.flag },
			topLevelDomains: [{ ...topLevelDomains[0], name: fields.topLevelDomains }],
			capital: fields.capital,
			area: fields.area,
			population: fields.population
		};

		event.preventDefault();
		edit( edited );
	}

	return (
		<Container onSubmit={ submit }>
			<Group>
				<Label>Bandeira:</Label>
				<Field onChange={ change } value={ fields.flag } name="flag" type="text" required />
			</Group>
			<Group>
				<Label>Nome:</Label>
				<Field onChange={ change } value={ fields.name } name="name" type="text" required />
			</Group>
			<Group>
				<Label>Capital:</Label>
				<Field onChange={ change } value={ fields.capital } name="capital" type="text" required />
			</Group>
			<Group>
				<Label>Área:</Label>
				<Field onChange={ change } value={ fields.area } name="area" type="number" required />
			</Group>
			<Group>
				<Label>População:</Label>
				<Field onChange={ change } value={ fields.population } name="population" type="number" required />
			</Group>
			<Group>
				<Label>Domínio de topo:</Label>
				<Field onChange={ change } value={ fields.topLevelDomains } name="topLevelDomains" type="text" required />
			</Group>
			<Btn>Salvar</Btn>
		</Container>
	);
}