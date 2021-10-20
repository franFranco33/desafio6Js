class Cotizacion {
    constructor( nombre, precio, supply) {    
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.supply = supply;
    }
}
const criptomoneda = []
criptomoneda.push(new Cotizacion('Bitcoin', '60000', '19000000'));
criptomoneda.push(new Cotizacion('Moc', '0.13', '1400000000'));
criptomoneda.push(new Cotizacion('Ether', '4000', '100000000'));
criptomoneda.push(new Cotizacion('Sol', '180', '400000000'));
criptomoneda.push(new Cotizacion('Sov', '25', '4200000'));
console.log(Cotizacion)
console.log(criptomoneda)

