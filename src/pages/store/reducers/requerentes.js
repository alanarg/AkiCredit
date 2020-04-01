const INITIAL_STATE = {
   req_prox: [
        {
        id:'1',        
        nome: "Alan Arguelho da Silva",
        empresa: "Calçados tops",
        valor:"30000",
        cnpj: "0099837333"
        },
        {
            id:'2',        
            nome: "luka lycka",
            empresa: "Calçados tops",
        valor:"30000",

            cnpj: "0099837333"
        },
        {
            id:'1',        
            nome: "Alan Arguelho da Silva",
        valor:"30000",
        empresa: "Calçados tops",
            cnpj: "0099837333"
        },
        {
            id:'1',        
            nome: "Alan Arguelho da Silva",
        valor:"30000",
        empresa: "Calçados tops",
            cnpj: "0099837333"
        },
        
        {
            id:'1',        
            nome: "Alan Arguelho da Silva",
        valor:"30000",
        empresa: "Calçados tops",
            cnpj: "0099837333"
            },
            {
            id:'1',        
            nome: "Alan Arguelho da Silva",
        valor:"30000",
        empresa: "Calçados tops",
            cnpj: "0099837333"
            },
            {
            id:'1',        
            nome: "Alan Arguelho da Silva",
        valor:"30000",
        empresa: "Calçados tops",
            cnpj: "0099837333"
            },
            {
            id:'1',        
            nome: "Alan Arguelho da Silva",
        valor:"30000",
        empresa: "Calçados tops",
            cnpj: "0099837333"
            },
            {
            id:'1',        
            nome: "Alan Arguelho da Silva",
        valor:"30000",
        empresa: "Calçados tops",
            cnpj: "0099837333"
            },
            {
            id:'1',        
            nome: "Alan Arguelho da Silva",
        valor:"30000",
        empresa: "Calçados tops",
            cnpj: "0099837333"
            },
            {
            id:'1',        
            nome: "Alan Arguelho da Silva",
        valor:"30000",
        empresa: "Calçados tops",
            cnpj: "0099837333"
            },
        
    ],
    req_aceito:[]


  
}

export default function req(state = INITIAL_STATE, action){
    if(action.type === 'ADD_REQ'){
        return{ ...state, req_aceito:[...state.req_aceito, action.requerente]};
    }
    return state;
}