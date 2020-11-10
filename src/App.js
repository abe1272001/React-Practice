import React, { Component } from 'react';
import Counters from './components/counters'
import Navbar from './components/navBar'


class App extends React.Component{

  state = { 
    counters: [
      {id: 0, value: 4},
      {id: 1, value: 3},
      {id: 2, value: 2},
      {id: 3, value: 0}
    ]
  };

  //由主程式來處理資料刪除
  handleDelete = (counterId) => {
    // console.log("delete event occur", counterId)
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({counters: counters})
  };

  handleIncrement = (counter) => {
    // console.log(counter)
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // console.log(index)
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters}); //傳入更新counters state
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    const newCounters = [{...this.state.counters}]
    // console.log(counters)
    this.setState({counters})
  };

  render() {
    console.log(this.state.counters)
    return (
    <React.Fragment>
      <Navbar totalCounter={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters 
          counters={this.state.counters}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement} 
          onDelete={this.handleDelete}
          />
      </main>
    </React.Fragment>
    );
  }
  
}

export default App;
