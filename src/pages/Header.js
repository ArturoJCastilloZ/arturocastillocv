import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../assets/images/imagen2.png';


export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className='bg-cyan-600 m-auto' light expand="md">
          <img src={logo} className='w-11 h-12 rounded-full md:mr-5 mr-0 md:ml-5 ml-5'/>
          <NavbarBrand className='body font-bold text-uppercase'>
            Arturo Castillo
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="" navbar>
              <NavItem>
                <NavLink href="https://github.com/ArturoJCastilloZ" target="_blank">GitHub <GitHubIcon /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/castillo93/" target="_blank">LinkedIn <LinkedInIcon /></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}