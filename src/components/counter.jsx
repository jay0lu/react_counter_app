import React, { Component } from 'react';

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
    if(prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from server
    }
  }

  componentWillUnmount() {
    // cleanup, delete timers, listeners
  }

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button
          className='btn btn-danger btn-sm m-2'
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;