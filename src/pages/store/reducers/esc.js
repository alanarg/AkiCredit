const INITIAL_VALOR = {
    valor:'1000'
}

export default function esc(state = INITIAL_VALOR, action){
    if(action.type === 'ESC_VALOR'){
        return{ ...state, valor: action.valor};
    }
    return state;
}