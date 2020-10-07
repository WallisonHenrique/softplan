import React from 'react';
import { Container, Flag, Country, Table, THead, Cell } from './styles';
import { useQuery } from '@apollo/client';
import { DETAILS } from '../../graphql/queries';
import Message from '../Message/Message';
import { Link } from 'react-router-dom';

export default function Details ({ match }) {
	const { loading, error, data } = useQuery(DETAILS, {
		variables: { id: match.params.id }
	});
	
	if (loading) return <Message>Carregando...</Message>;
  	if (error) return <Message>Falha :(</Message>;
  	if (data.Details.length === 0) {
  		return <Message>
			Não foi encontrado. Tende novamente. <br />
			<Link to="/softplan">Voltar</Link>
		</Message>
  	}

  	const country = data.Details;
	const name = country.nameTranslations[0].value;
	const { flag, capital, area, population, topLevelDomains } = country;
	
	return (
		<Container>
			<Link to="/softplan">Voltar</Link>
			<Flag>
				<img src={ flag.svgFile } alt={` Bandeira ${ name } `} />
			</Flag>
			<Country>{ name }</Country>
			<Table>
				<tbody>
					<tr>
						<THead>Capital</THead>
						<Cell>{ capital }</Cell>
					</tr>
					<tr>
						<THead>Área</THead>
						<Cell>{ area }</Cell>
					</tr>
					<tr>
						<THead>População</THead>
						<Cell>{ population }</Cell>
					</tr>
					<tr>
						<THead>Domínio de topo</THead>
						<Cell>{ topLevelDomains[0].name }</Cell>
					</tr>
				</tbody>
			</Table>
			<Link to={`/softplan/editar/${match.params.id}`}>Editar</Link>
		</Container>
	);
}