import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

/*
Use React and the data below to display a list of people alongside their books they like.

Fazal Deen's likes a Imran Series book.

For detailed instructions, refer to instructions.md.
*/
class FilteredListItem extends Component{
  render(){
  let arr=this.props.list.filter(val=>val.bookLikedID==this.props.chk)
  if(arr.length>0){
  return(
    <ul>{
    arr.map(val=>(<li>{this.props.peeps[val.peepsID].name}</li>))
    }</ul>
  )}
  else{
    return(<p>None of the peeps in the chart liked this book</p>)
  }
}
}

class ListItem extends Component{
render(){
  return(
<div>
    {Object.keys(this.props.obj).map(val=>(<div><h2>{this.props.obj[val].name}</h2><p>Liked by</p><FilteredListItem list={this.props.chart} chk={this.props.obj[val].id} peeps={this.props.peep}/></div>))}
  </div>
  )
}
}

class App extends Component {
  render() {
    const chart = [
      {
        id: 1,
        peepsID: '1',
        bookLikedID: '1',
      },
      {
        id: 2,
        peepsID: '2',
        bookLikedID: '1',
      },
      {
        id: 3,
        peepsID: '4',
        bookLikedID: '5',
      },
      {
        id: 4,
        peepsID: '5',
        bookLikedID: '2',
      },
      {
        id: 5,
        peepsID: '3',
        bookLikedID: '5',
      },
      {
        id: 6,
        peepsID: '6',
        bookLikedID: '4',
      },
    ];
    
    const peeps = {
      1: {
        id: 1,
        name: 'Fazal Deen',
        readerCategory: 'champ',
      },
      2: {
        id: 2,
        name: 'Irfan',
        readerCategory: 'rising-star',
      },
      3: {
        id: 3,
        name: 'Muneeb',
        readerCategory: 'beginner',
      },
      4: {
        id: 4,
        name: 'Osama',
        readerCategory: 'champ',
      },
      5: {
        id: 5,
        name: 'Najam',
        readerCategory: 'champ',
      },
      6: {
        id: 6,
        name: 'Aamir',
        readerCategory: 'beginner',
      },
    };
    
    const books = {
      1: {
        id: 1,
        name: 'Imran Series',
      },
      2: {
        id: 2,
        name: 'Harry Potter',
      },
      3: {
        id: 3,
        name: 'I Am Malala',
      },
      4: {
        id: 4,
        name: 'Bang-e-Dara by Allama Iqbal',
      },
      5: {
        id: 5,
        name: 'Jokes 101',
      },
    };

    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Practice</h1>
        </header>
       
        <ListItem obj={books} peep={peeps} chart={chart}/>      
      </div>
    );
  }
}

export default App;
