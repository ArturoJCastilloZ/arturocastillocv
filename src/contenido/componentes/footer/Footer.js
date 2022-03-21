import React, { Component } from 'react';
import { Container } from 'reactstrap';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MapIcon from '@mui/icons-material/Map';

class Footer extends Component {
    render() {
        return (
            <div className='bg-dark text-white text-center pt-10'>
                <Container className='text-white inline-block'>
                    <div className='flex justify-content-center'>
                        <div className='px-2'>                
                            <a href='https://www.linkedin.com/in/castillo93/' target="_blank" rel="noreferrer" className='text-white'>
                                <LinkedInIcon />
                            </a>
                        </div>
                        <div className='px-2'>            
                            <a href='https://github.com/ArturoJCastilloZ' target="_blank" rel="noreferrer" className='text-white'>
                                <GitHubIcon />
                            </a>
                        </div>
                    </div><br />
                    <div>
                        <p><MapIcon /> Santa Catarina, Nuevo León</p>
                    </div>
                <p className='text-center'>Copyright &copy; 2022 Arturo de Jesús Castillo Zapata</p>
                <p className='text-center text-sm italic text-gray-400'>Página creada con Reactjs, Tailwindcss y un poco de CSS</p><br/>
                </Container>                
            </div>
        );
    }
}

export default Footer;
