import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo.svg";
import {get_Topics , get_lession} from "../../api/api";
var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      topics:'',
      active:'',
      };
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
     localStorage.setItem('n',routeName);
     var get_item = localStorage.getItem('n');
     if(get_item == routeName){

     }
    return routeName ;
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

  side_bar(group){
    this.setState({active:'active'})
    localStorage.setItem('g',group);
     var get_item = localStorage.getItem('g');
     console.log(this.props.location.pathname.split("/")[3]);
     this.get_lessions(this.props.location.pathname.split("/")[3]);
      localStorage.setItem('old',localStorage.getItem('new'));
      localStorage.setItem('new',this.props.location.pathname.split("/")[3]);
  }

  get_lessions(id){

     get_lession(id)
      
        .then(
          (result) => {
           console.log(result);
            this.setState({
              lesson: result.data.data,
            
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
  render() {

  var user_id = localStorage.getItem('i');
  var get_item = localStorage.getItem('g');
  

    if(!user_id){
       this.props.history.replace('/auth/login');
    }
   const { topics } = this.state;
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
                  className={get_item == prop.name ? 'active' : ''}
                    key={key}
                onClick={(e)=>this.side_bar(prop.name)}>
                  
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
