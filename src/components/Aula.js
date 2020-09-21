import React from 'react'
// usando class como component
class Aula extends React.Component{
    
    constructor (props){
        super();
    }

    componentDidMount(){

        console.log("props: ", this.props.dados);

    }

    render(){

        return (

            <>
            
                <ul id="listAaula">

                    { this.props.dados.map((aula, i) => <li key={i}> {aula}</li>)}

                </ul>

            </>

        );
    }

};

export default Aula;