import React from 'react';
const Search=({searchChange})=>{
	return(
			<div className='tc'>
			<input 
			className='pa2 ba b--green bg-lightest-blue mb3' 
			type='search' 
			placeholder='Search RoBo'
			onChange={searchChange}
			/>
			</div>
		);
}
export default Search;