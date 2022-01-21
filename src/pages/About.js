import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'reactstrap';

class About extends Component {
    render() {
        return (
            <div className='bg-gradient-to-b from-sky-600 from-cyan-600 body'>
                <Container className='pl-20 pr-20 tracking-wide md:p-10 text-left md:text-center'>
                    <p className='text-center text-uppercase fs-1 text-black font-bold'>Sobre mi</p>
                    <Row className=''>
                        <Col className='text-black font-semibold'>
                            <p className='text-xl'>Mi nombre es <strong className='italic underline decoration-double'>Arturo de Jesús Castillo Zapata</strong>, soy estudiante en la Universidad Tecnológica de Santa Catarina en la carrera de Ingeniería en Desarrollo y gestión de software;
                            Actualmente estoy cursando el último cuatrimestre de la carrera.</p>
                            <p className='text-xl'>Mi experiencia se resume solamente a proyectos escolares en los que se ha utilizado HTML, PHP, CSS, Bootstrap y algo de Javascript.
                            También tuve un empleo en <strong className='italic'>Triple i Soluciones</strong>, donde estuve como practicante de desarrollo web; en esta empresa tuve la oportunidad de adentrarme un poco
                            al framework Angular, el cual se me hizo algo complicado pero, al final, logré entenderlo.</p>
                            <p className='text-xl'>El gusto por Reactjs fue gracias al úncio maestro que se salió de la clase básica enfocada a crear un login con HTML, PHP y CSS. Después, tuve la oportunidad de volver a utilizarlo
                            durante mi estadía en <strong className='italic'>Triple i Soluciones</strong>, incluso también utlicé un framework CSS llamado <strong className='font-bold italic'>Tailwindcss</strong>.
                            El gusto por la combinación entre Reactjs y Tailwindcss fue tanta, que este sitio web esta creado con estos dos frameworks.</p>
                            <p className='text-xl'>En fin, esto es solo una pequeña descripción sobre mi persona.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;
