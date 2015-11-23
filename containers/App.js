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
      items: [],
      lastUpdated: null,
      filterText: ''
    };
  }

  componentDidMount() {
    var self = this;
    setTimeout(function() {
      console.log("fetching items....");
      self.fetchItems()
    }, 10);
  }

  fetchItems() {
    this.setState({isFetching: true}, function() {
      fetch(`http://content.guardianapis.com/world?api-key=${ApiKeys.guardianKey}`)
      .then(response => response.json())
      .then(json => {
        var d = new Date();
        this.setState({items: json.response.results, isFetching: false, lastUpdated: d.toString()})
      })
    });
  }

  updateFilterText(e) {
    this.setState({filterText: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>Guardian Breaking News</h1>
        <h4>Filter: {this.state.filterText}</h4>
        <Newsfetcher
          status={this.state.isFetching}
          refresh={this.fetchItems.bind(this)}
          lastUpdated={this.state.lastUpdated}
          filterText={this.state.filterText}
          updateFilterText={this.updateFilterText.bind(this)} />
        <Headlines
          items={this.state.items}
          filterText={this.state.filterText} />
      </div>
    );
  }
}

export { App as default };
