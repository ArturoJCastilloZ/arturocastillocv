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
import logo from '../../../assets/images/imagen2.png';


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
      <div className='flex justify-around'>
        <Navbar className='bg-dark' light expand="md">
          <NavbarBrand className='fs-4 text-uppercase text-white'>
            Arturo Castillo
          </NavbarBrand>
          <img src={logo} alt='logoArturo' className='w-11 h-12 rounded-full md:mr-5 mr-3 md:ml-5'/>
          <NavbarToggler className='bg-white' onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://github.com/ArturoJCastilloZ" target="_blank" className='text-white'>GitHub <GitHubIcon /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/castillo93/" target="_blank" className='text-white'>LinkedIn <LinkedInIcon /></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
