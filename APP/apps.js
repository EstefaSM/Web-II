
import api from "./helpers/wp_api.js"



// Al usar una función que se convertirá en una instrucción, usamos "export"

export function App(){
    var text = `
    <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/Product">Productos</a></li>
        <li><a href="/Inventary">Inventario</a></li>
    </ol>
    `;

    document.getElementById('root').innerHTML=`<h1>Mamá estoy triunfando</h1> ${text}`

    console.log(api);
}     