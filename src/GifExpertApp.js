import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
	const [ categories, setCategories ] = useState([ 'OnePunch' ]);

	// const handleAdd = () => {
	// 	// setCategories([ ...categories, 'Hunter X' ]);
	// 	// setCategories([ 'Hunter X', ...categories ]);
	// 	setCategories((cats) => [ ...cats, 'Hunter X' ]);
	// };

	return (
		<div>
			<h2>GitExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</div>
	);
};
