import React from 'react';
import Card from './Card';


const CardList=({robots})=>{
     const RoboArray=robots.map((elements,i)=>{
		return (
			<Card 
			key={i}
			id={robots[i].id} 
			name={robots[i].name} 
			email={robots[i].email}
			/>
			)
	})
     if(robots.length>0){
	return(
		<div className='flex flex-wrap justify-center'>
		{RoboArray}
		</div>

		)}
	else{
		return <h1 className='f2 tc pa2'>NOT FOUND</h1>
	}
}
export default CardList;
