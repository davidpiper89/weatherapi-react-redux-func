import { initialState } from "./initialState";

export function reducer(state = initialState, action) {

    switch (action.type) {
        case "SET_WEATHER_API":
            return { ...state, weathers: action.payload}
        case "SET_GROUND_API":
            return {...state, ground: action.payload}
            
        
    
        default:
            return state;
    }
}