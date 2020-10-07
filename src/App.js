import React from 'react';
import Routes from './routes/Routes';

import { useQuery } from '@apollo/client';
import { COUNTRIES } from './graphql/queries';
import { contriesItemsVar } from './graphql';

function App() {
	const { loading, error, data } = useQuery(COUNTRIES);
	
	if (loading) return <p>Carregando...</p>;
  	if (error) return <p>Falha :(</p>;
  	
	contriesItemsVar(data.Country);

	return (
		<Routes />
	);
}

export default App;
