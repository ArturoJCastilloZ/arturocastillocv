import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'reactstrap';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

class About extends Component {
    render() {
        return (
            <div className='bg-gray-300 body'>
                <Container className='pl-20 pr-20 tracking-wide md:p-10 pt-10'>
                    <div className='inline grid-cols-2 md:grid md:divide-x-2 md:divide-slate-400 divide-x-0'>
                        <div className='md:pr-8 pr-0 md:text-left text-center'>
                            <Row>
                                <p className='text-center text-uppercase fs-1 text-black font-bold'>Sobre mi</p>
                                <Col className='text-black font-semibold'>
                                    <p className='text-xl'>Mi nombre es <strong className='text-orange-700'>Arturo de Jesús Castillo Zapata</strong>, soy estudiante en la Universidad Tecnológica de Santa Catarina en la carrera de Ingeniería en Desarrollo y gestión de software;
                                    Actualmente estoy cursando el último cuatrimestre de la carrera.</p>
                                    <p className='text-xl'>Mi experiencia se resume solamente a proyectos escolares en los que se ha utilizado HTML, PHP, CSS, Bootstrap y algo de Javascript.
                                    También tuve un empleo en <strong className='italic text-red-700'>Triple i Soluciones</strong>, donde estuve como practicante de desarrollo web; en esta empresa tuve la oportunidad de adentrarme un poco
                                    al framework Angular, el cual se me hizo algo complicado pero, al final, logré entenderlo.</p>
                                    <p className='text-xl'>El gusto por Reactjs fue gracias al úncio maestro que se salió de la clase básica enfocada a crear un login con HTML, PHP y CSS. Después, tuve la oportunidad de volver a utilizarlo
                                    durante mi estadía en <strong className='italic text-red-700'>Triple i Soluciones</strong>, incluso también utlicé un framework CSS llamado <strong className='italic text-red-700'>Tailwindcss</strong>.
                                    El gusto por la combinación entre Reactjs y Tailwindcss fue tanta, que este sitio web esta creado con estos dos frameworks.</p>
                                </Col>
                            </Row>
                        </div>

                        <div className='md:pl-8 pl-0 md:p-0 pt-8'>
                            <Row>
                                <Col className='text-black font-semibold'>
                                    <p className='text-center text-uppercase fs-1 text-black font-bold'>Aptitudes</p>
                                    <ul className='font-semibold text-xl'><br/>
                                        <li><DoubleArrowIcon />Reactjs nivel básico</li>
                                        <li><DoubleArrowIcon />Tailwindcss nivel básico</li>
                                        <li><DoubleArrowIcon />Git nivel básico/intermedio</li>
                                        <li><DoubleArrowIcon />Scrum</li>
                                        <li><DoubleArrowIcon />Angular nivel basico</li>
                                        <li><DoubleArrowIcon />HTML</li>
                                        <li><DoubleArrowIcon />PHP</li>
                                        <li><DoubleArrowIcon />CSS</li>
                                        <li><DoubleArrowIcon />Javascript</li>
                                    </ul><br />
                                    <p className='text-center text-uppercase fs-1 text-black font-bold'>Intereses</p>
                                    <div className='inline grid-cols-2 md:grid'>
                                        <div>                                            
                                            <p className='border-2 rounded-full px-4 h-8 w-32 border-slate-700 text-xl'>Reactjs</p>
                                            <p className='border-2 rounded-full px-4 h-8 w-32 border-slate-700 text-xl'>Angular</p>
                                            <p className='border-2 rounded-full px-4 h-8 md:w-38 w-36 border-slate-700 text-xl'>Javascript</p>
                                        </div>
                                        <div>                                            
                                            <p className='border-2 rounded-full px-4 h-8 w-20 border-slate-700 text-xl'>Git</p>
                                            <p className='border-2 rounded-full px-4 h-8 w-40 border-slate-700 text-xl'>Tailwindcss</p>
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
