// actions and payload

// State is stored here

const initialState = {
    text: '', // Search text
    movies: [],
    loading: false,
    movie: [] // For a single movie
}


export default function(state = initialState, action){
    switch(action.type){
        case 'SEARCH_MOVIE':
            return {
                ...state,
                text: action.payload,
                loading: false
            };
        case 'FETCH_MOVIES':
            return {
              ...state,
              movies: action.payload,
              loading: false
            };
        case 'FETCH_MOVIE':
            return {
                ...state,
                movie: action.payload,
                loading: false
            };
        case 'LOADING':
            return{
                ...state,
                loading: true
            };
        default: 
            return state;
    }
}