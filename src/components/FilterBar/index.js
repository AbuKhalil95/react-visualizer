import React, { useEffect, useState } from 'react';
import { Chip } from '@material-ui/core';
import { useStyles } from './styles.js';

export const FilterBar = (props) => {
	const classes = useStyles();
	let chips = { jsx: [], categories: [] };

	const ResetChip = () => <Chip
		key={'reset'}
		label={'Reset'}
		color="secondary"
		clickable
		onClick={props.reset}
		variant="default"
		classes={{ root: classes.reset }}/>;

	const populateData = (data) => {
		data.forEach((element, idx) => {
			element?.menu?.forEach((item, index) => {

				if (item.category && !chips.categories.includes(item.category)) {
					chips.categories.push(item.category);

					chips.jsx.push(
						<Chip
							key={index + 10 * idx}
							label={item.category}
							color="primary"
							clickable
							onClick={(e) => { props.update(item.category) }}
							variant="outlined"
							classes={{ root: classes.chip }}
						/>);
				}
			})
		});
		return chips.jsx
	}

	return (
		<>
			<div className={classes.root}>
				<ResetChip/>
				{populateData(props.items)}
			</div>
		</>
	);
}
