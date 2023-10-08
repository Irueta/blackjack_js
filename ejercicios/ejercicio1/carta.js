
class Carta {
    constructor(palo, valor) {
        // TODO: Guardar palo y valor en propiedades
        this.palo=palo;
        this.valor=valor;
    }
  
    getValor() {
        /* 
        * TODO: Devolver el valor de la carta
        * 2-10 valen su valor
        * J, Q, K valen 10
        * A vale 11 
        */
      switch(this.valor) {
        case "A":
          return 11;
          break;
        case ("J"||"Q"||"K"):
            return 10;
            break;
        default:
          return parseInt(this.valor);
      }
    }
  }

export default Carta;

