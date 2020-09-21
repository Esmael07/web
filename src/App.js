import React from 'react';

import Header from './components/Header';
import Aula from './components/Aula';
import FormAula from './components/FormAula';
import { Button, Form } from 'react-bootstrap';

const aulas = ["react aula 1", "reat aula  n"];

function App() {

  return (    

   <div>
      
      <Header titulo = "  primeiro titulo " subtitulo = " react componente">

        <ul>

          <li> Home</li>
          <li> Sobre</li>
          <li> Contato</li>

        </ul>

      </Header>

        <Header titulo = " segundo titulo " subtitulo = "react components e propriedade "> 

          <ul>

            <li> Home</li>
            <li> Sobre</li>
            
          </ul>

        </Header>

        <Header>

          <Form>
            <Form.Group controlId="formBasicEmail">

                <Form.Label>Email address</Form.Label>
                <Form.Control  placeholder="Enter email" />
        
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>

          </Form>

        </Header>

        <h1>Imprimindo dados de Array</h1>

       <Aula dados = {aulas}></Aula>

       <h1>Fazendo Formulario</h1>

       <FormAula></FormAula>
       
    </div> 

  );

}

export default App;
