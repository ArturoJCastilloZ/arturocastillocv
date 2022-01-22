import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardSubtitle, CardText, Container } from 'reactstrap';
import SchoolIcon from '@mui/icons-material/School';
import EventIcon from '@mui/icons-material/Event';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

class Training extends Component {
    render() {
        return (
            <div className='pt-10 body'>
                <Container>
                    <p className='text-center text-uppercase fs-1 text-black font-bold'>
                        Formación académica
                    </p>
                    <div className='inline grid-cols-2 gap-4 md:grid'>
                        <div>                            
                            <Card className='bg-gradient-to-r from-amber-500 to-orange-500'>
                                <CardHeader className='text-uppercase font-bold fs-4 text-center'><SchoolIcon/> Tecnico Superior Universitario</CardHeader>
                                <CardBody>
                                    <CardSubtitle className='font-semibold'><ArrowForwardIosIcon /> Tecnologías de la información y comunicación</CardSubtitle><br/>
                                    <CardText className='font-semibold'><ArrowForwardIosIcon /> Universidad Tecnológica de Santa Catarina</CardText>
                                    <CardText className='font-semibold'><EventIcon /> Inicio: Septiembre del 2017</CardText>
                                    <CardText className='font-semibold'><EventIcon /> Fin: Agosto del 2020</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='pt-10 md:pt-0'>                            
                            <Card className='bg-gradient-to-r from-lime-500 to-emerald-500'>
                                <CardHeader className='text-uppercase font-bold fs-4 text-center'><SchoolIcon/> Ingeniería</CardHeader>
                                <CardBody>
                                    <CardSubtitle className='font-semibold'><ArrowForwardIosIcon /> Desarrollo y gestión de software</CardSubtitle><br/>
                                    <CardText className='font-semibold'><ArrowForwardIosIcon /> Universidad Tecnológica de Santa Catarina</CardText>
                                    <CardText className='font-semibold'><EventIcon /> Inicio: Septiembre del 2020</CardText>
                                    <CardText className='font-semibold'><EventIcon /> Fin previsto: Abril del 2022</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Container>                
            </div>
        );
    }
}

export default Training;
