import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
function UserInput(props){
return (<form><input placeholder='Enter User Name' onChange={props.username} type='Text'/></form>)
}
function ShowList(props){
  return ( <ul className="item-list">
  {props.itemList.map((item, index) => <li key={index}>{item} played {props.game} games</li>)}
</ul>)
}
function ToogleButton(props){
  return(<button onClick={props.Toggle}>{props.text}</button>)
}
class App extends Component {
  state={
    username:'',
    user:[],
    game:0,
    Toggle:true,
    ButtonText:'Hide Text'
  }
  toggle=()=>{
    if(this.state.Toggle){
      this.setState({game:'*',Toggle:false,
                      ButtonText:'Show Text'
    });
    }
    else{
      this.setState({game:0,Toggle:true,ButtonText:'Hide Text'});
    }
  }
  setUsername=(e)=>{
    this.setState({username: e.target.value});
  }
  pushInto=()=>{
    let arr=this.state.user
    arr.push(this.state.username)
    this.setState({user:arr});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Excercise</h1>        
        </header>
        <br/>
        <UserInput username={this.setUsername}/>
        <br/>
        <button onClick={this.pushInto}>Click to add Users</button>
        <br/>
        <ShowList itemList={this.state.user} game={this.state.game}/>
        <ToogleButton text={this.state.ButtonText} Toggle={this.toggle}/>     
      </div>
    );
  }
}
export default App;

