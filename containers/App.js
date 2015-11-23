import React, { Component, PropTypes } from 'react';
import Headlines from '../components/Headlines';
import Newsfetcher from '../components/Newsfetcher';
import fetch from 'isomorphic-fetch';
import ApiKeys from '../ApiKeys'

class App extends Component {
  constructor() {
    super();
    this.state = {
      isFetching: false,
      items: []
    };
  }

  componentDidMount() {
    this.fetchItems()
  }

  fetchItems() {
    this.setState({isFetching: true}, function() {
      fetch(`http://content.guardianapis.com/world?api-key=${guardianKey}`)
      .then(response => response.json())
      .then(json => {
        this.setState({items: json.response.results, isFetching: false})
      })
    });
  }

  render() {
    return (
      <div>
        <h1>Guardian Breaking News</h1>
        <Newsfetcher status={this.state.isFetching} refresh={this.fetchItems.bind(this)} />
        <Headlines items={this.state.items} />
      </div>
    );
  }
}

export { App as default };
