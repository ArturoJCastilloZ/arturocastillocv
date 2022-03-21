import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'reactstrap';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

class About extends Component {
    render() {
        return (
            <div className='bg-dark'>
                <Container className='pl-20 pr-20 tracking-wide md:p-10 pt-10'>
                    <div className='md:pr-8 pr-0 md:text-left text-center pb-20'>
                        <Row>
                            <p className='text-center text-uppercase fs-1 text-white '>Sobre mi</p>
                            <Col className='text-white description text-lg'>
                                <p>
                                    Mi nombre es <strong className='italic text-yellow-300'>Arturo de Jesús Castillo Zapata</strong>, 
                                    tengo 29 años y soy estudiante en la Universidad Tecnológica de Santa Catarina en la carrera de 
                                    Ingeniería en Desarrollo y gestión de software.
                                    Actualmente curso el último cuatrimestre de la carrera.<br/>
                                    Elegí estudiar esta carrera ya que siento una atracción por todo lo que a tecnología se refiere;
                                    en algún momento estuve apunto de cambiarme de carrera pero mi gusto por la tecnología fue más fuerte.
                                </p>
                                <p>
                                    Soy una persona muy enfocada en cada actividad que realizo, me gusta aprender y siempre estoy buscando
                                    la forma de enriquecer más mis conocimientos como programador.<br/>
                                    Me gustaría enfocarme en conocer a fondo Reactjs ya que me gusta la sintaxis y lo intuitiva que
                                    es esta librería; sin embargo, también me gustaría aprender a utilizar completamente el Framework Laravel,
                                    del cual tengo conocimiento básico. 
                                </p>

                                <p>                                        
                                </p>
                            </Col>
                        </Row>
                    </div>
                    
                    <div className='inline grid-cols-2 md:grid '>
                        <div className='md:pl-8 pl-0 md:p-0 pt-8 flex justify-content-center'>
                            <Row>
                                <Col className='text-white'>
                                    <p className='text-center text-uppercase fs-1 text-white'>Aptitudes</p>
                                    <ul className='description text-lg'><br/>
                                        <li><DoubleArrowIcon />HTML</li>
                                        <li><DoubleArrowIcon />CSS</li>
                                        <li><DoubleArrowIcon />Javascript</li>
                                        <li><DoubleArrowIcon />JQuery</li>
                                        <li><DoubleArrowIcon />PHP</li>
                                        <li><DoubleArrowIcon />Laravel Framework</li>
                                        <li><DoubleArrowIcon />Tailwindcss</li>
                                        <li><DoubleArrowIcon />Reactjs</li>
                                        <li><DoubleArrowIcon />Git</li>
                                        <li><DoubleArrowIcon />Scrum</li>
                                    </ul>
                                </Col>
                            </Row>                       
                        </div>
                        
                        <div className='md:pl-8 pl-0 md:p-0 pt-8 flex justify-content-center'>
                            <Row>
                                <Col className='text-white'>
                                    <p className='text-center text-uppercase fs-1 text-white'>Intereses</p>
                                    <div className='inline grid-cols-2 md:grid text-lg'>
                                        <div>                                            
                                            <p className='border-2 rounded-full px-4 h-8 md:w-38 w-32 border-slate-700 '>Laravel</p>
                                            <p className='border-2 rounded-full px-4 h-8 md:w-38 w-32 border-slate-700 '>Reactjs</p>
                                            <p className='border-2 rounded-full px-4 h-8 md:w-38 w-36 border-slate-700 '>Javascript</p>
                                            <p className='border-2 rounded-full px-4 h-8 md:w-38 w-36 border-slate-700 '>JQuery</p>
                                        </div>
                                        <div>                                            
                                            <p className='border-2 rounded-full px-4 h-8 md:w-38 w-20 border-slate-700 '>Git</p>
                                            <p className='border-2 rounded-full px-4 h-8 md:w-38 w-40 border-slate-700 '>Tailwindcss</p>
                                            <p className='border-2 rounded-full px-4 h-8 md:w-38 w-24 border-slate-700 '>CSS</p>
                                            <p className='border-2 rounded-full px-4 h-8 md:w-38 w-24 border-slate-700 '>PHP</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>                       
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default About;
