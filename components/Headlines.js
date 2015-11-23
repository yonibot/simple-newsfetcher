import React, { Component, PropTypes } from 'react'

class Headlines extends Component {
  render() {
    let { items } = this.props;
    let itemList = items.map((item, i) => {
      return (<li key={i}><a href={item.webUrl}>{item.webTitle}</a></li>)
    });
    return (
      <div>
        <ul>{itemList}</ul>
      </div>
    )
  }
}

export { Headlines as default };
