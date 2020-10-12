import React from 'react';
import { Container } from './styles';
import Card from '../Card/Card';
import Message from '../Message/Message';

export default function List ({ loading, error, data }) {
	if (loading) return <Message>Carregando...</Message>;
  	if (error) return <Message>Falha :(</Message>;
  	if (data === undefined) return <Message>Carregando...</Message>;
  	if (data.list.length === 0) return <Message>País não encontrado. Tente novamente.</Message>;
  
	return (
		<Container data-testid="list">
			{
				data.list.map(( country, i ) => 
					<Card key={ i } country={ country } />
				)
			}
		</Container>
	);
}