import React, { Component } from 'react';
import ExpensesTable from './Components/ExpensesTable';
import UserInput from './Components/UserInput';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      rows: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
  }

  componentDidMount() {
    let item = JSON.parse(localStorage.getItem('Expense'));
    item ? this.setState({ rows: item }) : this.setState({ rows: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.rows.length !== prevState.rows.length) {
      localStorage.setItem('Expense', JSON.stringify(this.state.rows));
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log('e.target: ', e.target.value);
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newExpenseItem = {
      id: Math.random(),
      descripion: this.state.description,
      amount: this.state.amount,
      date: this.state.date,
      payment: this.state.payment
    };

    this.setState({
      rows: [...this.state.rows, newExpenseItem]
    });
  };

  deleteExpense = (expenseId) => {
    const rowsMinusOne = this.state.rows.filter((expenseItem) => {
      return expenseItem.id !== expenseId;
    });
    this.setState({
      rows: rowsMinusOne
    });
  };

  render() {
    return (
      <div className='App'>
        <UserInput onSubmit={this.onSubmit} handleChange={this.handleChange} />
        <ExpensesTable
          deleteExpense={this.deleteExpense}
          expenses={this.state.rows}
        />
      </div>
    );
  }
}

export default App;
