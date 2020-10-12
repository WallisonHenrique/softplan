import React from 'react';
import Routes from './routes/Routes';
import Message from './components/Message/Message';

import { useQuery } from '@apollo/client';
import { GETDATA } from './graphql/queries';
import { contriesItemsVar } from './graphql';

export default function App() {
	const { loading, error, data } = useQuery( GETDATA);

	if (loading) return <Message>Carregando...</Message>;
  	if (error) return <Message>Falha :(</Message>;

  	contriesItemsVar(data.Country);
	return (
		<>
			<Routes />
		</>
	);
}