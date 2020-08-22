import React, { useState } from 'react';
import CreatableSelect from "react-select/creatable";

import './product-input.css'


const getStyles = () => ({
	control: base => ({
		...base,
		borderTop: 0,
		borderRight: 0,
		borderLeft: 0,
		// This line disable the blue border
		boxShadow: 'none',
		borderRadius: 0,
		borderColor: 'hsl(0,0%,80%)',
		cursor: 'pointer',
		'&:hover': {
			border: 0,
		},
		'&:active': {
			border: 0,
		},
		'&:focus': {
			border: 0,
		},
	}),
    dropdownIndicator: base => ({
		...base,
		display: 'none',
	}),
	indicatorSeparator: base => ({
		display: 'none',
	}),
	placeholdera: (base, state) => ({
		...base,
		display: state.isFocused ? 'none' : base.display,
	}),
})

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center"
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

function ProductInput({}) {
	return (
		<CreatableSelect
			styles={getStyles()}
			placeholder="Search a product..."
			options={[]}
			formatGroupLabel={formatGroupLabel}
			openMenuOnFocus={false}
			openMenuOnClick={false}
		/>
	)
}

export default ProductInput;
