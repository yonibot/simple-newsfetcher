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
      filterText: '',
      autoRefresh: false
    };
  }

  componentDidMount() {
    this.fetchItems();
    setInterval(() => {
      if (this.state.autoRefresh === true) {
        this.fetchItems()
      }
    }, 3000);
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

  toggleAutorefresh() {
    this.setState({autoRefresh: !this.state.autoRefresh})
  }

  render() {
    return (
      <div>
        <h1>Guardian Breaking News</h1>
        <Newsfetcher
          status={this.state.isFetching}
          refresh={this.fetchItems.bind(this)}
          toggleAutoRefresh={this.toggleAutorefresh.bind(this)}
          autoRefreshStatus={this.state.autoRefresh}
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
