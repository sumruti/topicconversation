import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo.svg";
import {get_Topics} from "../../api/api";
var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      topics:''
      };
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
    var user_id =   localStorage.getItem('i');
    var user_role =   localStorage.getItem('r');
      get_Topics(user_id,user_role)
    
      .then(
        (result) => {
          this.setState({
            topics: result.data.data,
          
          });
        },
       
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {

  var user_id = localStorage.getItem('i');
  

    if(!user_id){
       this.props.history.replace('/auth/login');
    }
   const {topics } = this.state;
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div className="logo">
          <a
            href=""
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
          <a
            href=""
            className="simple-text logo-normal"
          >
            Conversations
          </a>
        </div>
        <div className="sidebar-wrapper" ref={this.sidebar}>
          <Nav>
              <li>
                  <NavLink
                    to="/admin/topics"
                    className="nav-link"
                    activeClassName="active"
                    style={{marginBottom: '-20px'}} 
                  >
                    <label style={{fontSize: '20px'}} ><b>Topics</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label className="fa fa-plus-circle" style={{fontSize: '25px'}}></label></label>
                  </NavLink>
               
              </li>
            {topics !='' &&
            topics.map((prop, key) => {
              return (
                <li
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  
                   <NavLink
                    to={"/admin/"+prop.name+'/'+prop.id}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className="fa fa-folder" />
                    <p>{prop.name}</p>
                  </NavLink>
               
                
                  
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
