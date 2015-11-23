import React, { Component, PropTypes } from 'react'

class Filterbar extends Component {
  render() {
    const { filterText, updateFilterText } = this.props;
    return (
      <div>
        Filter for <input type="text" value={filterText} onChange={updateFilterText} />
      </div>
    )
  }
}

export { Filterbar as default };
