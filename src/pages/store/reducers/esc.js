const INITIAL_VALOR = {
    esc:{},
    esc_taxas:{},
    esc_loc:{}
    
}

export default function esc(state = INITIAL_VALOR, action){
    if(action.type === 'ESC_OBJECT'){
        return{...state, esc: action.esc};
    }
    if(action.type === 'ESC_EXIST'){
        return{esc: action.esc};
    }
    if(action.type === 'ESC_TAXAS'){
        return{...state,esc_taxas: action.taxa_geral};
    }
    if(action.type === 'ESC_LOC'){
        return{esc_loc:action.esc};
    }
    return state;
}