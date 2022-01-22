import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import WorkIcon from '@mui/icons-material/Work';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';

class Experience extends Component {
    render() {
        return (
            <div className='bg-gray-300 pt-20 pb-20 body'>
            <Container>
                <p className='text-center text-uppercase fs-1 text-black font-bold'>Experiencia</p>
                <div className='grid grid-cols-1 gap-4'>
                    <div>                            
                        <Card>
                            <CardHeader className='bg-gradient-to-t from-slate-400 from-slate-400 text-uppercase font-bold fs-3'>Practicante de desarrollo web <WorkOutlineIcon/></CardHeader>
                            <CardBody>
                                <CardSubtitle><a className='font-bold text-xl no-underline hover:underline' href='http://www.tripleisoluciones.com/'><WorkIcon /> Triple i Soluciones</a></CardSubtitle><br/>
                                <CardText className='font-semibold'><EventIcon/> Inicio: Agosto del 2021</CardText>
                                <CardText className='font-semibold'><EventIcon/> Fin: Diciembre del 2021</CardText><br/>
                                <CardTitle className='text-uppercase font-bold fs-4 text-center'>Actividades</CardTitle><br/>
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
                </div>
            </Container>                
        </div>
        );
    }
}

export default Experience;