
import React from "react";
import { connect } from 'react-redux'
import { handleSearch } from '../actions/index'


const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => props.handleSearch(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

const mapDispatchToProps = {
  handleSearch
}

export default connect(null, mapDispatchToProps)(Search)
