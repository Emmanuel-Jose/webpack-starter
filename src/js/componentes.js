import '../css/componentes.css'
// import webpackLogo from '../assets/img/webpack-logo.png'

export const saludar = ( nombre ) => {
    console.log( 'Creado etiqueta h1' );

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }`;

    document.body.append( h1 );

    //Img
    // const img = document.createElement( 'img' );
    // img.src = webpackLogo;
    // document.body.append( img );
}

/**Hay que poner palabra export para poder exportar la funcion */