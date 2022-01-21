import React, { Component } from 'react';
import { Container } from 'reactstrap';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import MapIcon from '@mui/icons-material/Map';

class Footer extends Component {
    render() {
        return (
            <div className='bg-gray-700 text-center pt-20'>
                <Container className='text-white inline grid-cols-2 md:grid'>
                    <div className=''>
                        <p>Me pueden encontrar en</p>
                        <a href='https://www.linkedin.com/in/castillo93/' className='text-slate-50 hover:text-slate-400 pr-4'>
                            <LinkedInIcon />
                        </a>
                        <a href='https://github.com/ArturoJCastilloZ' className='text-slate-50 hover:text-slate-400'>
                            <GitHubIcon />
                        </a>
                    </div>
                    <div className=''>
                        <p><MailIcon /> castillo.arturo93@hotmail.com</p>
                        <p><MapIcon /> Santa Catarina, Nuevo León</p>
                    </div><br/>
                </Container>                
                <p className='text-white text-center'>Copyrigth &copy; 2022 Arturo de Jesús Castillo Zapata</p><br/>
            </div>
        );
    }
}

export default Footer;