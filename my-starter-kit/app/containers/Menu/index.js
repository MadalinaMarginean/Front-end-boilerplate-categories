import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './style.scss';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      height: 0,
    };
  }

  toggle = subsetLength => {
    const heightValue = 100 + 60 * subsetLength;
    if (this.state.visible === false) {
      setTimeout(() => {
        this.setState({
          height: '100%',
        });
      }, 500);
      this.setState({
        visible: true,
        height: heightValue,
      });
    } else {
      this.setState({
        height: heightValue,
      });
      setTimeout(() => {
        this.setState({
          visible: false,
          height: 0,
        });
      }, 500);
    }
  };

  render() {
    const { visible, height } = this.state;
    const { node } = this.props;
    // console.log('this.innerRef.offsetHeight', heightChild);
    let childNodes;
    if (node != null) {
      childNodes = node.subset.map((nodee, index) => (
        <li key={index}>
          <Menu node={nodee} open={false} />
        </li>
      ));
    }
    const menuClass = cn(styles.menu, { [styles.show]: visible });
    const divClass = cn(styles['expander-wrap']);
    return (
      <div className={divClass}>
        <h5 onClick={() => this.toggle(node.subset.length)}>{node ? node.name : null}</h5>
        <ul className={menuClass} style={{height: height}}>{childNodes}</ul>
      </div>
    );
  };
}

Menu.propTypes = {
  node: PropTypes.object.isRequired,
};

export default Menu;
