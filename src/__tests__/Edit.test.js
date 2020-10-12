import React from "react";
import { render, screen, wait, fireEvent } from "@testing-library/react";
import Edit from '../components/Edit/Edit';

import { MockedProvider } from '@apollo/client/testing';
import { DETAILS } from '../graphql/queries';

import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';

const renderWithRouter = (ui, { route = '/softplan/661' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, { wrapper: BrowserRouter })
}

const mocks = [
	{ 
		request: { 
			query: DETAILS, 
			variables: { id: "661"}
		},
		result: { 
			data: {
				details: {
					area: 8515767,
					capital: "Brasília",
					flag: {svgFile: "https://restcountries.eu/data/bra.svg"},
					nameTranslations: [{value: "Brasil"}],
					population: 206135893,
					topLevelDomains: [{name: ".br"}],
					_id: "661"
				}
			}
		}
	}
];

const match = {
	params: {
		id: "661"
	}
};

describe('Edit component', () => {
	it('renders Edit component without errors', async () => {
		renderWithRouter(
			<MockedProvider mocks={mocks} addTypename={false}>
				<Edit match={match} />	
			</MockedProvider>
		);
		await wait();
	});

	it('should show error UI', async () => {
		const errorMock = {
			request: {
			query: DETAILS,
			variables: { id: '661' },
			},
			error: new Error('fail'),
		};
		renderWithRouter(
			<MockedProvider mocks={[errorMock]} addTypename={false}>
				<Edit match={match} />	
			</MockedProvider>
		);

		await wait(() => expect(screen.getByText("Falha :(")).not.toBeNull());
	});

	it('should render loading state initially', async () => {
		renderWithRouter(
			<MockedProvider mocks={mocks}>
				<Edit match={match} />	
			</MockedProvider>
		);
		expect(screen.getByText("Carregando...")).not.toBeNull();
		await wait();
	});

	it("check if you haven't found the country", async () => {
		const notFindMock = { 
			request: { 
				query: DETAILS, 
				variables: { id: "661"}
			},
			result: { 
				data: {
					details: []
				}
			}
		};		
	
		renderWithRouter(
			<MockedProvider mocks={[notFindMock]}>
				<Edit match={match} />	
			</MockedProvider>
		);
		await wait(() => expect(screen.getByText("País não encontrado. Tente novamente.")).not.toBeNull());
	});

	it("check if date is undefined", async () => {
		const notFindMock = { 
			request: { 
				query: DETAILS, 
				variables: { id: "661"}
			},
			result: { 
				data: undefined
			}
		};		
	
		renderWithRouter(
			<MockedProvider mocks={[notFindMock]}>
				<Edit match={match} />	
			</MockedProvider>
		);
		await wait(() => expect(screen.getByText("Carregando...")).not.toBeNull());
	});

	it('renders link go back', async () => {
		renderWithRouter(
			<MockedProvider mocks={mocks}>
				<Edit match={match} />	
			</MockedProvider>
		);
		await wait(() => expect(screen.getByText("Voltar")).not.toBeNull());
	});

	it("creates correct object to save changes", async () => {
		const history = createMemoryHistory()
		render(
			<MockedProvider mocks={mocks}>
				<Router history={history}>
			      <Edit match={match} history={history} />
			    </Router>	
			</MockedProvider>
		);
		await wait(() => fireEvent.submit(screen.getByTestId("edit")));
	});
});