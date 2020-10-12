import React from 'react';
import { Container, Flag, Country, Capital } from './styles';
import { Link } from 'react-router-dom';

export default function Card ({ country }) {
	const name = country.nameTranslations[0].value;
	const { flag, capital, _id } = country;

	return (
		<Container data-testid="card">
			<Link data-testid="link-details" to={`/softplan/${ _id }`}>
				<div>
					<Flag src={ flag.svgFile } alt={` Bandeira ${ name } `} />
				</div>
				<div>
					<Country>{ name }</Country>
					<Capital>{ capital }</Capital>
				</div>
			</Link>
		</Container>	
	);
}