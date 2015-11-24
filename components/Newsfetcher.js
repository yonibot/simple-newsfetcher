import React, { Component, PropTypes } from 'react'
import Filterbar from './Filterbar'

var Styles={
  refresh: {
    textDecoration: 'underline',
    color: 'blue'
  }
}

class Newsfetcher extends Component {
  render() {
    const {
      status,
      refresh,
      lastUpdated,
      updateFilterText,
      filterText,
      toggleAutoRefresh,
      autoRefreshStatus } = this.props;
    return (
      <div>
        <ul>
          <li>Fetching? {(status === true) ? "yes" : "no"}</li>
          <li>Last updated: {lastUpdated}</li>
          <li>
            <span
              onClick={refresh}
              style={Styles.refresh}>Refresh</span>
            &nbsp;
            <span
              onClick={toggleAutoRefresh}
              style={Styles.refresh}>Toggle Auto-refresh</span>
            &nbsp; status: <b>{autoRefreshStatus === true ? "on":"off"}</b>
          </li>
      </ul>
        <Filterbar
          updateFilterText={updateFilterText}
          filterText={filterText} />
      </div>
    )
  }
}

export { Newsfetcher as default };
