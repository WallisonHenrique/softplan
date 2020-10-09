import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import { useLazyQuery } from '@apollo/client';
import { DETAILS } from '../../graphql/queries';
import { contriesItemsVar } from '../../graphql/index';

import Message from '../Message/Message';
import Form from '../Form/Form';

export default function Edit ({ match, history }) {
	const [ getDetails, { error, loading, data }] = useLazyQuery( DETAILS, 
		{ variables: { id: match.params.id } }
	);

	useEffect( () => {
		getDetails();
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

  	const edit = edited => {
  		const newLocalData = contriesItemsVar().map( item => {
  			if ( item._id === edited._id )
  				return edited;
  			return item;
  		});

  		contriesItemsVar([ ...newLocalData ]);

  		history.push("/softplan");
  	};
	
	return (
		<Container>
			<Link to="/softplan">Voltar</Link>
			<Form country={ data.details } edit={ edit } />
		</Container>
	);
}