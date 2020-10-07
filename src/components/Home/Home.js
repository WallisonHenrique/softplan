import React from 'react';
import Search from '../Search/Search';
import List from '../List/List';

import { useQuery } from '@apollo/client';
import { LIST } from '../../graphql/queries';

export default function Home () {
	const vars = { term: "" };

	const { loading, error, data, refetch } = useQuery(LIST, {
		variables: vars
	});

	const search = term => {
		vars.term = term;
		refetch(vars);
	};

	return (
		<>
			<Search search={ search } />
			<List loading={ loading } error={ error } data={ data } />
		</>	
	);
}