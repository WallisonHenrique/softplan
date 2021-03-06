import styled from 'styled-components';

export const Container = styled.article`
	margin: 0 auto;
	max-width: 700px;
	padding: 15px;
`;

export const Flag = styled.div`
	margin-bottom: 20px;
	margin-top: 10px;
	text-align: center;

	img {
		max-width: 100%;
		width: 400px;
	}
`;

export const Country = styled.h2`
	font-size: 22px;
	margin-bottom: 10px;
	text-transform: uppercase;
`;

export const Table = styled.table`
	border-spacing: initial;
	margin-bottom: 10px;
	text-align: left;
	width: 100%;
`;

export const THead = styled.th`
	border-bottom: 1px solid #000;
	font-weight: normal;
	padding: 5px;
`;

export const Cell = styled.td`
	border-bottom: 1px solid #000;
	font-weight: bold;
	padding: 5px;
`;