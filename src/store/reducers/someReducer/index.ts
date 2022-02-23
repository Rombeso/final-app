import {ActionType, StateType} from "./types";


const initialState = {

}

export const someReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case "SOME": {
            return {...state}
        }
        default: return state
    }
}


export const someAC = ()=> {
    return {
        type: "SOME",
    }as const
}


