import React, { Component, PropTypes } from 'react'

class Headlines extends Component {
  render() {
    const { items, filterText } = this.props;
    let itemList = items.map((item, i) => {
      if (item.webTitle.toLowerCase()
            .indexOf(filterText.toLowerCase()) === -1) {
        return;
      } else {
        return (<li key={i}><a href={item.webUrl}>{item.webTitle}</a> ({new Date(Date.parse(item.webPublicationDate)).toUTCString()})</li>);
      };
    });
    return (
      <div>
        <ol>{itemList}</ol>
      </div>
    )
  }
}

export { Headlines as default };
