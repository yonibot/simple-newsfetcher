import React, { Component, PropTypes } from 'react'
import Filterbar from './Filterbar'

class Newsfetcher extends Component {
  render() {
    const { status, refresh, lastUpdated, updateFilterText, filterText } = this.props;
    return (
      <div>
        <ul>
          <li>Fetching? {(status === true) ? "yes" : "no"}</li>
          <li>Last updated: {lastUpdated}</li>
          <li><a href="" onClick={refresh}>Refresh</a></li>
        </ul>
        <Filterbar
          updateFilterText={updateFilterText}
          filterText={filterText} />
      </div>
    )
  }
}

export { Newsfetcher as default };
