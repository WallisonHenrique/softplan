import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Message from '../Message/Message';
import Form from '../Form/Form';

import { DETAILS } from '../../graphql/queries';
import { contriesItemsVar } from '../../graphql/index';

export default function Edit ({ match, history }) {
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

  	const edit = edited => {
  		const newList = contriesItemsVar().map( item => {
  			if ( item._id === edited._id )
  				return edited;
  			return item; 
  		});

  		contriesItemsVar([ ...newList ]);
  		history.push("/softplan");
  	};
	
	return (
		<>
			<Link to="/softplan">Voltar</Link>
			<Form country={ data.Details } edit={ edit } />
		</>
	);
}