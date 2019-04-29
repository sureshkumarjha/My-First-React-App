import React,{Component} from 'react';
import CardList from './CardList';
import Search from './Search';
import 'tachyons';
import 'animate.css'
import './App.css'
import Scroll from './Scroll'

class App extends Component{
	constructor(){
		super();
		this.state={
			robots:[],
			searchfield:''
		}
}

 onSearchChange=(event)=>{
	this.setState({ searchfield:event.target.value })

}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots:users}))
}

render()
{
		var filarr=this.state.robots.filter(item=>{
		return(item.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
	})	
		return(
	<div>
	<div className='cont'>
	<h1 className='f1 tc animated  heartBeat delay-5s slower'>ROBO FRIENDS</h1>
	<Search  searchChange={this.onSearchChange} />
	</div>
	<Scroll>
	<CardList robots={filarr} />
	</Scroll>
	</div>
	);
	}
}
export default App;