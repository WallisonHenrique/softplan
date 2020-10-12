import React from "react";
import { render, screen, wait } from "@testing-library/react";

import { MockedProvider } from '@apollo/client/testing';
import { GETDATA } from '../graphql/queries';
import { contriesItemsVar } from '../graphql';

import App from '../App';

const dataList = {
	Country: [
		{ 
			area: 8515767,
			capital: "Brasília",
			flag: {svgFile: "https://restcountries.eu/data/bra.svg"},
			nameTranslations: [{value: "Brasil"}],
			population: 206135893,
			topLevelDomains: [{name: ".br"}],
			_id: "661"
		}
	]
};

const mocks = [{ request: { query: GETDATA }, result: { data: dataList }}];

describe('App component', () => {
	it('renders App component without errors', async () => {
		render(
			<MockedProvider mocks={mocks} addTypename={false}>
		      <App />
		    </MockedProvider>
		);

		await wait();
	});


	it('should render loading state initially', async () => {
		render(
			<MockedProvider mocks={mocks} addTypename={false}>
		      <App />
		    </MockedProvider>
		);

		await wait(() => expect(screen.getByText("Carregando...")).not.toBeNull());
	});

	it('store server data in the reactive variable', async () => {
		render(
			<MockedProvider mocks={mocks} addTypename={false}>
		      <App />
		    </MockedProvider>
		);

		await wait(() => expect(contriesItemsVar()).toEqual(dataList.Country));
	});

	it('should show error UI', async () => {
		const errorMocks = {
			request: {
				query: GETDATA
			},
			error: new Error('fail')
		};

		render(
			<MockedProvider mocks={[errorMocks]} addTypename={false}>
		      <App />
		    </MockedProvider>
		);

		await wait(() => expect(screen.getByText("Falha :(")).not.toBeNull());
	});
});