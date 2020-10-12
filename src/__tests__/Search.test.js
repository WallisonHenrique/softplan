import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Search from '../components/Search/Search';

describe('Search component', () => {
	it('renders a form', () => {
		render(<Search />);
		expect(screen.getByTestId("search")).not.toBeNull();
	});

	it('renders the search field by country as a text box', () => {
		render(<Search />);
		const field = screen.getByPlaceholderText("Pesquisar por país...");
		expect(field).not.toBeNull();
		expect(field.tagName).toEqual('INPUT');
		expect(field.type).toEqual('text');
	});

	it('renders a label for the search field', () => {
		render(<Search />);
		const label = screen.getByLabelText('Pesquisar por país');
		expect(label).not.toBeNull();
	});

	it('sends the search term when submitted', async () => {
		render(
			<Search
				search={ term =>
					expect(term).toEqual('')
				}
			/>
		);

		await fireEvent.submit(screen.getByTestId("search"));
	});

	it('sends user-entered search term', async () => {
		const searchTerm = "Brasil";

		render(
			<Search
				search={ term =>
					expect(term).toEqual(searchTerm)
				}
			/>
		);

		await fireEvent.change(screen.getByPlaceholderText("Pesquisar por país..."), { target: { value: searchTerm } });

		await fireEvent.submit(screen.getByTestId("search"));
	});
});