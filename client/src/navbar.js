import React, { Component } from 'react'
import Style from './navbar.style'
import { Header, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { handleLogout } from './actions/auth'
import { css } from "emotion"
import { withRouter, Link } from 'react-router-dom'

class NavBar extends Component {
  state = { isNavOpen: false };

  toggleNav() {
    this.setState({isNavOpen: !this.state.isNavOpen})
  }

  renderNav() {
    const { dispatch } = this.props;
    if(this.state.isNavOpen) {
      return(
        <div className="nav-menu">
          <ul>
            <li>
            <Link to='/'>
              View Flights
              </Link>
            </li>
            <li>
              My Account
            </li>
            <li onClick={() => dispatch(handleLogout(this.props.history))}>
              Logout
            </li>
          </ul>
        </div>
      );
    }
  }

  render() {
    const icon = this.state.isNavOpen ? "times" : "sidebar";
    if(this.props.user.id === undefined) { return(null); }

    return (
      <Style className="navbar">
        <Icon link name={icon} size="big" onClick={() => this.toggleNav()}/>
        {this.renderNav()}
        <div className={css`float: left; display: flex;`}>
          <Link to="/">
            <Icon name="paper plane" link size="big"/>
          </Link>
          <Header>TimeFlies</Header>
        </div>
      </Style>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar));