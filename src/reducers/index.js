let initialState = {
    mohit: []
};
export default function items(state= initialState, action) {
    if(action.type === "MOHIT"){
        console.log(action.msg,'asas');
        console.log(state.mohit,'ssss');
        return{            
            mohit: [...state.mohit, action.msg]
        }
    }

    return state;
}