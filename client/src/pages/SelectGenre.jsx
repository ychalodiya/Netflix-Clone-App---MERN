import React from 'react';
import styled from 'styled-components';
import { fetchMoviesByGenre } from '../store';
import { useDispatch } from 'react-redux';

export default function SelectGenre({ genres, type }) {
	const dispatch = useDispatch();

	return (
		<Select
			className="flex"
			onChange={(e) => {
				dispatch(fetchMoviesByGenre({ genre: e.target.value, type }));
			}}
		>
			{genres.map((genre) => {
				return (
					<option key={genre.id} value={genre.id}>
						{genre.name}
					</option>
				);
			})}
		</Select>
	);
}

const Select = styled.select`
	margin-left: 5rem;
	cursor: pointer;
	font-size: 1.4rem;
	background-color: rgba(0, 0, 0, 0.4);
	color: white;
`;
