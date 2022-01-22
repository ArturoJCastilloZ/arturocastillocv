import React, { Component } from 'react';
import { Container } from 'reactstrap';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MapIcon from '@mui/icons-material/Map';

class Footer extends Component {
    render() {
        return (
            <div className='bg-gradient-to-t from-gray-400 from-gray-400 text-center pt-10'>
                <Container className='text-black inline-block'>
                    <div>
                        <a href='https://www.linkedin.com/in/castillo93/' target="_blank" rel="noreferrer" className='text-slate-900 hover:text-slate-500 pr-4'>
                            <LinkedInIcon />
                        </a>
                        <a href='https://github.com/ArturoJCastilloZ' target="_blank" rel="noreferrer" className='text-slate-900 hover:text-slate-500'>
                            <GitHubIcon />
                        </a>
                    </div><br />
                    <div>
                        <p><MapIcon /> Santa Catarina, Nuevo León</p>
                    </div>
                </Container>                
                <p className='text-black text-center'>Copyright &copy; 2022 Arturo de Jesús Castillo Zapata</p><br/>
            </div>
        );
    }
}

export default Footer;
