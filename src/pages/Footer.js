import React, { Component } from 'react';
import { Container } from 'reactstrap';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MapIcon from '@mui/icons-material/Map';

class Footer extends Component {
    render() {
        return (
            <div className='bg-gray-700 text-center pt-10'>
                <Container className='text-white inline-block'>
                    <div>
                        <a href='https://www.linkedin.com/in/castillo93/' className='text-slate-50 hover:text-slate-400 pr-4'>
                            <LinkedInIcon />
                        </a>
                        <a href='https://github.com/ArturoJCastilloZ' className='text-slate-50 hover:text-slate-400'>
                            <GitHubIcon />
                        </a>
                    </div><br />
                    <div className=''>
                        <p><MapIcon /> Santa Catarina, Nuevo León</p>
                    </div>
                </Container>                
                <p className='text-white text-center'>Copyright &copy; 2022 Arturo de Jesús Castillo Zapata</p><br/>
            </div>
        );
    }
}

export default Footer;
