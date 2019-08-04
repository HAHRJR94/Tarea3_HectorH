let fetch = require('node-fetch');


async function getCountry(countryName) {
    try{
        let response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
        let country = await response.json();
    
        console.log(country);
    } catch (error){
        return 'Error al consultar el API';
    }
}

process.stdout.write('Ingrese el nombre de un país (en inglés): ');
process.stdin.on('data', (chunk) => {
    let country = getCountry(chunk);    
    process.stdin.destroy();
});
 