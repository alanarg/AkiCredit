//aqui ficaraao as funções exemplo

export function escvalor(valor){
    return{
        //Sempre colocar um nome para a action
        type: ESC_VALOR,
        //depois os objetos ou variaveis
        valor
    }
}

//QUANDO FOR UTILIZAR AS ACTIONS DE ALGUMA CLASSE FAZER A DEVIDA IMPORTAÇÃO EX:
// import * as escActions from 'diretório'
//Ai quando utlizar alguma função apenas se referir como: escActions.escvalor()
