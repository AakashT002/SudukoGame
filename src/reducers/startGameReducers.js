const initialState = {
    texts: [{
        t1:'',
        t6:'',
        t8:'',
    }]
}

export default function startGameReducers(state = initialState, action) {
    switch (action.type) {
        case 'START_GAME':
            return { ...state, texts: action.texts };

        default:
            return state;
    }
}