import * as React from 'react';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  render() {
    var childNodes;
    if (this.props.node != null) {
      childNodes = this.props.node.subset.map(function(node, index) {
        return <li key={index}><Menu node={node} /></li>});
    }

    var style = {};
    if (!this.state.visible) {
      style.display = "none";
    }

    return (
      <div>
        <h5 onClick={() => this.setState({visible: !this.state.visible})}>
          {this.props.node ? this.props.node.name : null}
        </h5>
        <ul style={style}>{childNodes}</ul>
      </div>
    );
  };
}
