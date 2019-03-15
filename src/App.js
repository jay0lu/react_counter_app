import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar.jsx'
import Conters from './components/counters.jsx'

class App extends Component {
  state = {
    counters: [
      {id: 1, value: 1},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++
    this.setState({counters})
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }

  handleDelet = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({
      counters: counters
    })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className='container'>
          <Conters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelet}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
