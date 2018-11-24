import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarCategory title="Layout" icon="layers">
            <button className="sidebar__link" onClick={this.props.changeToLight}>
              <p className="sidebar__link-title">Light Theme</p>
            </button>
            <button className="sidebar__link" onClick={this.props.changeToDark}>
              <p className="sidebar__link-title">Dark Theme</p>
            </button>
          </SidebarCategory>
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="Options for tx" icon="diamond">
            <SidebarLink title="Decode transaction" route="/pages/one" onClick={this.hideSidebar} />
            <SidebarLink title="Broadcast transaction" route="/pages/two" onClick={this.hideSidebar} />
          </SidebarCategory>
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
