// usando class como component

import React from 'react'

import { Button, Form } from 'react-bootstrap';

class FormAula extends React.Component{

    constructor(props){

        super()

        this.state = {
            email:'',
            password:''
        }

    } 
    componentDidMount(){

        // faz o set do estado inicial
        this.setState({email:'angelocorreia27@gmail.com', password:'343545345'});

    }

    // detecta alteração e faz o set do state
    changeHandler(e){

        e.preventDefault();

        //console.log('name: ', e.target.name);        
        //console.log('valor: ', e.target.value);

        this.setState({ [e.target.name]: e.targret.value });

           // console.log('state: ', this.state);

    }

    render(){

        return (

            <>
                <Form>
                    <Form.Group controlId="formBasicEmail">

                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" value={this.state.email} placeholder="Enter email" onChange={(e) => {this.changeHandler(e)}}/>
                
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" value={this.state.password} placeholder="Password" onChange={(e) => {this.changeHandler(e)}}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>

                 </Form>

            </>
        );
    }
}

export default FormAula;