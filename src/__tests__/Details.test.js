import React from "react";
import { render, screen, wait } from "@testing-library/react";
import Details from '../components/Details/Details';

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

describe('Details component', () => {
	it('renders Details component without errors', async () => {
		renderWithRouter(
			<MockedProvider mocks={mocks} addTypename={false}>
				<Details match={match} />	
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
				<Details match={match} />	
			</MockedProvider>
		);

		await wait(() => expect(screen.getByText("Falha :(")).not.toBeNull());
	});

	it('should render loading state initially', async () => {
		renderWithRouter(
			<MockedProvider mocks={mocks}>
				<Details match={match} />	
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
				<Details match={match} />	
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
				<Details match={match} />	
			</MockedProvider>
		);
		await wait(() => expect(screen.getByText("Carregando...")).not.toBeNull());
	});


	it('renders flag field', async () => {
		renderWithRouter(
			<MockedProvider mocks={mocks}>
				<Details match={match} />	
			</MockedProvider>
		);
		await wait(() => {
			const flag = screen.getByAltText("Bandeira Brasil");
			expect(flag).not.toBeNull();
			expect(flag.src).toBe("https://restcountries.eu/data/bra.svg");
		});
	});

	it('renders capital field', async () => {
		renderWithRouter(
			<MockedProvider mocks={mocks}>
				<Details match={match} />	
			</MockedProvider>
		);
		await wait(() => {
			expect(screen.getByText("Capital")).not.toBeNull();
			expect(screen.getByText("Brasília")).not.toBeNull()
		});
	});

	it('renders area field', async () => {
		renderWithRouter(
			<MockedProvider mocks={mocks}>
				<Details match={match} />	
			</MockedProvider>
		);
		await wait(() => {
			expect(screen.getByText("Área")).not.toBeNull();
			expect(screen.getByText("8515767 km²")).not.toBeNull();
		});
	});

	it('renders population field', async () => {
		renderWithRouter(
			<MockedProvider mocks={mocks}>
				<Details match={match} />	
			</MockedProvider>
		);
		await wait(() => {
			expect(screen.getByText("População")).not.toBeNull();
			expect(screen.getByText("206135893")).not.toBeNull();
		});
	});

	it('renders topLevelDomains field', async () => {
		renderWithRouter(
			<MockedProvider mocks={mocks}>
				<Details match={match} />	
			</MockedProvider>
		);
		await wait(() => {
			expect(screen.getByText("Domínio de topo")).not.toBeNull();
			expect(screen.getByText(".br")).not.toBeNull();
		});
	});
});