import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Flag, Country, Table, THead, Cell } from './styles';
import Message from '../Message/Message';

import { useLazyQuery } from '@apollo/client';
import { DETAILS } from '../../graphql/queries';

export default function Details ({ match }) {
	const [ getList, { error, loading, data }] = useLazyQuery( DETAILS,
		{ variables: { id: match.params.id } }
	);

	useEffect(() => {
		getList();
	},[]);
	
	if (loading) return <Message>Carregando...</Message>;
  	if (error) return <Message>Falha :(</Message>;
  	if (data === undefined) return <Message>Carregando...</Message>;
  	if (data.details.length === 0) {
  		return <Message>
			País não encontrado. Tente novamente. <br />
			<Link to="/softplan">Voltar</Link>
		</Message>
  	}

	const name = data.details.nameTranslations[0].value;
	const { flag, capital, area, population, topLevelDomains } = data.details;
	
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
						<Cell>{ area } km²</Cell>
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