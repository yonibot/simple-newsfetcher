import React, { Component, PropTypes } from 'react'

class Newsfetcher extends Component {
  render() {
    const { status, refresh } = this.props;
    return (
      <div>
        Fetching? {(status === true) ? "yes" : "no"}
        <p><a href="" onClick={refresh}>Refresh</a></p>
      </div>
    )
  }
}

export { Newsfetcher as default };
