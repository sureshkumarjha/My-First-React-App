import React from 'react';
import 'tachyons';
const Card=({name,id,email})=>{
	return(
		<div className='bg-light-green dib br3 ma2 grow bw2 shadow-5'>
		<img alt="ROBOTS" src={`https://robohash.org/${id}?200x200`}/>
		<div className='tc'>
		<h2 className=''>{name}</h2>
		<p>{email}</p>
		</div>
		</div>
		);
}
export default Card;