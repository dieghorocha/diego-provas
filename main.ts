import { Controle } from "./minhas notas";
import prompt from 'prompt-sync';

let control: Controle = new Controle(0, 0, 0 );
let teclado = prompt();
let option: number = 0;


while (option !== 9) {
    console.log(`==============Menu===============`);
    console.log('1. notas           ');
    console.log('9. Sair               👉         ');
    console.log('=================================');

    option = +teclado('Ecolha uma ação : ');

    switch (option) {
        case 1:
            let valor1: number = +teclado('primeira nota:');
            let valor2: number = +teclado ('segunda nota: ');
            control.atribuir(valor1, valor2);
            control.Cmedia();

            console.log('');

            break;
        case 2:
            
            
            break;
        default:
            break;
    }
}