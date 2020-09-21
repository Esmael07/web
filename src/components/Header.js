import React from 'react'

// usando funcao como component

function Header({titulo, subtitulo, children}) {

    return (

        <>

        <h1>Aprendendo Js </h1>
        
        <h1>{titulo}</h1>   

        <p>{subtitulo}</p>

        {children}

        </>  
    
    );
}

export default Header;