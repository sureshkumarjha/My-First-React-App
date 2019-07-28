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
			searchfield:'',
			islogin:false,
		}
}

 onSearchChange=(event)=>{
	this.setState({ searchfield:event.target.value })

}

onlogin=()=>{
	this.setState({
		islogin : true
	})
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
	<div className=''>
	<div className='cont'>
	<h1 className='f1 tc animated  heartBeat delay-5s slower'>ROBO FRIENDS</h1>
	</div>
	{(this.state.islogin)?
	<div>
		<Search  searchChange={this.onSearchChange} className='mb3 ' />
		<Scroll className='mt3'>
		<CardList robots={filarr} />
		</Scroll>
		</div>
	:<main className="pa4 black-80 ">
	<form className="measure center ba pa4  bglinear br3">
	  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		<legend className="f4 fw6 ph0 mh0">Sign In</legend>
		<div className="mt3">
		  <label className="db fw6 lh-copy f6" for="email-address">Email</label>
		  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
		</div>
		<div className="mv3">
		  <label className="db fw6 lh-copy f6" for="password">Password</label>
		  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
		</div>
	  </fieldset>
	  <div className="tc">
		<button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
		onClick={this.onlogin} >Sign In</button>
	  </div>
	</form>
  </main>}
 
	</div>
	);
	}
}
export default App;