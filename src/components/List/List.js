import React from 'react';
import { Container } from './styles';
import Card from '../Card/Card';
import Message from '../Message/Message';

export default function List ({ loading, error, data }) {
	if (loading) return <Message>Carregando...</Message>;
  	if (error) return <Message>Falha :(</Message>;
  	if (data.Countries.length === 0) return <Message>Não foi encontrado nenhum país. Tente novamente.</Message>;
  
	return (
		<Container>
			{
				data.Countries.map(( country, i ) => 
					<Card key={ i } country={ country } />
				)
			}
		</Container>
	);
}