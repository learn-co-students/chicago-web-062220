
import React from "react";
import { connect } from 'react-redux'
import { deleteTransaction } from '../actions/index'


const Transaction = (props) => {
  const {id, date, description, category, amount } = props.transaction
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={() => props.deleteTransaction(id)}>delete</button></td>
    </tr>
  );
};

const mapDispatchToProps = {
  deleteTransaction
}

export default connect(null, mapDispatchToProps)(Transaction)
