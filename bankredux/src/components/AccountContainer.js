import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import { connect } from 'react-redux'
import { fetchTransactionsSuccess } from '../actions/index'

class AccountContainer extends Component {
  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactions => {
      this.props.fetchTransactionsSuccess(transactions)
    })
  }

  findFiltered = () => {
    return this.props.transactions.filter(t => t.description.includes(this.props.searchInput))
  }

  render() {
    const filteredTransactions = this.findFiltered()
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={filteredTransactions} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
    searchInput: state.searchInput
  }
}

const mapDispatchToProps = {
  fetchTransactionsSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer)


