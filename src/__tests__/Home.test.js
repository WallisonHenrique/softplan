import React from "react";
import { render, screen, wait, fireEvent } from "@testing-library/react";
import Home from '../components/Home/Home';

import { MockedProvider } from '@apollo/client/testing';
import { LIST } from '../graphql/queries';

const mocks = [
	{ 
		request: { 
			query: LIST, 
			variables: { term: "" }
		},
		result: { 
			data: {
				list: [
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
			}
		}
	}
];

describe('Home component', () => {
	it('renders Home component without errors', async () => {
		render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<Home />	
			</MockedProvider>
		);
		await wait();
	});

	it("checks if it's loading", async () => {
		render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<Home />	
			</MockedProvider>
		);

		await wait(() => expect(screen.getByText("Carregando...")).not.toBeNull());
	});
});