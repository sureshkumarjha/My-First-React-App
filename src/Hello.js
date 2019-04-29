import React , {Component} from  'react';
import './Hello.css';

// class Hello extends Component{
// 	render(){
// 		return(
// 			<h1>HELLO WORLD</h1>
// 			);
// 	}
// }
const Hello=(props)=>{
	return(
		<div>
		<h1 classname="f1">HELLO AGAIN</h1>
		<p >welcoome to my first app {props.print}</p>
		</div>
		);
}
export default Hello;
