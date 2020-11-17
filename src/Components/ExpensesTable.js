import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ExpensesTable = (props) => {
  console.log('expense table props: ', props);
  //   const expensesArray = [];

  //   for (let i = 0; i < props.expenses.length; i++) {
  //     const expense = props.expenses[i];
  //     const id =
  //       expensesArray.length > 0
  //         ? expensesArray[expensesArray.length - 1].index + 1
  //         : 1;
  //     expensesArray.push(
  //       <tr key={expense.id}>
  //         <td>{id}</td>
  //         <td>{expense.description}</td>
  //         <td>{expense.amount}</td>
  //         <td>{expense.payment}</td>
  //         <td>{expense.date}</td>
  //         <td>
  //           <Button
  //             className='btn btn-danger'
  //             onClick={(e) => props.deleteExpense(expense.id)}
  //           >
  //             Delete
  //           </Button>
  //         </td>
  //       </tr>
  //     );
  //   }

  const expenses = props.expenses;
  const expense = expenses.map((expense, num) => {
    return (
      <tr
        className='strikethrough'
        data-toggle='tooltip'
        data-placement='top'
        title='Want to delete? Just click!'
        onClick={() => props.deleteExpense(expense.id)}
        key={num}
      >
        <td>{num + 1}</td>
        <td>{expense.description}</td>
        <td>${expense.amount}</td>
        <td>{expense.payment}</td>
        <td>{expense.date}</td>
        <td>
          <Button
            className='btn btn-danger'
            onClick={(e) => props.deleteExpense(expense.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  console.log('expensesArray: ', expense);
  return (
    <Table
      className='main-table w-75 mx-auto mt-5 text-center'
      striped
      bordered
      hover
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Payment Type</th>
          <th>Date</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>{expense}</tbody>
    </Table>
  );
};

export default ExpensesTable;
