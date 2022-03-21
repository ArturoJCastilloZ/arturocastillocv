import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import WorkIcon from '@mui/icons-material/Work';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';

class Experience extends Component {
    render() {
        return (
            <div className='bg-dark pt-20 pb-20'>
            <Container>
                <p className='text-center text-uppercase fs-1 text-white'>Experiencia</p>
                <div className='inline grid-cols-2 gap-4 md:grid'>
                    <div>                            
                        <Card>
                            <CardHeader 
                                className='bg-gradient-to-r from-green-400 to-blue-500 text-uppercase fs-4'>
                                    Practicante de desarrollo web&nbsp; 
                                    <WorkOutlineIcon/>
                                </CardHeader>
                            <CardBody>
                                <CardSubtitle><a className='font-bold text-xl no-underline hover:underline' href='http://www.tripleisoluciones.com/'><WorkIcon /> Triple i Soluciones</a></CardSubtitle><br/>
                                <CardText className='font-semibold'><EventIcon/> Inicio: Agosto del 2021</CardText>
                                <CardText className='font-semibold'><EventIcon/> Fin: Diciembre del 2021</CardText><br/>
                                <CardTitle className='text-uppercase font-bold fs-4 text-center bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full'>Actividades</CardTitle><br/>
                                    <CardText className='text-left md:text-center font-semibold'>
                                            La empresa tiene en a la venta una aplicación web llamada Fluxy, la cual sirve para administrar los proyectos o tareas.
                                            La función principal es el mantenimiento a esta aplicación web; dicho mantenimiento se refiere a actualizaciones a la plataforma en base
                                            a los requerimientos de los clientes que ya contaban con el servicio de Fluxy.
                                    </CardText>
                                        <ul className='font-semibold'><br/>
                                            <li><ArrowRightAltIcon />Frontend: Angular</li>
                                            <li><ArrowRightAltIcon />Documentación técnica</li>
                                            <li><ArrowRightAltIcon />Pruebas unitarias con Karma&Jasmine</li>
                                            <li><ArrowRightAltIcon />Control de versiones con GitLab</li>
                                            <li><ArrowRightAltIcon />Actividades asignadas mediante la metología Scrum</li>
                                        </ul>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='pt-10 md:pt-0'>                            
                        <Card>
                            <CardHeader className='bg-gradient-to-r from-green-400 to-blue-500 text-uppercase fs-4'>
                                Programador JR&nbsp;
                                <WorkOutlineIcon/>
                            </CardHeader>
                            <CardBody>
                                <CardSubtitle><a className='font-bold text-xl no-underline hover:underline' href='https://www.tecsa.mx/inicio.html'><WorkIcon /> TECSA Contact Center</a></CardSubtitle><br/>
                                <CardText className='font-semibold'><EventIcon/> Inicio: Enero del 2022</CardText>
                                <CardText className='font-semibold'><EventIcon/> Actualidad </CardText><br/>
                                <CardTitle className='text-uppercase font-bold fs-4 text-center bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full'>Actividades</CardTitle><br/>
                                    <CardText className='text-left md:text-center font-semibold'>
                                            Desarrollar páginas web solicitadas mediante tickets por el equipo de Mejora Contínua para los departamentos como 
                                            Recursos Humanos, Soporte Técnico, incluso para motivar a los asesores con distintas dinámicas impartidas 
                                            por el departamento de Markenting. 
                                    </CardText>
                                        <ul className='font-semibold'><br/>
                                            <li><ArrowRightAltIcon />PHP</li>
                                            <li><ArrowRightAltIcon />Framework Laravel</li>
                                            <li><ArrowRightAltIcon />SQL Server</li>
                                            <li><ArrowRightAltIcon />MySQL</li>
                                            <li><ArrowRightAltIcon />GitHub</li>
                                        </ul>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Container>                
        </div>
        );
    }
}

export default Experience;