import React from 'react';
import './index.styles.css'

export const LetterTileDesktop = ({letter, selected}) => {
	
	return (
		<div className={selected ? "letter-tile-selected" : "letter-tile"}>
		<p>{letter.toUpperCase()}</p>
		</div>

	)
}