const initialState = {
    clinics: 'lll'
}

const clinicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_CLINIC': 
            console.log('created clinic', action.clinic)
            return state
        case 'CREATE_CLINIC_ERROR':
            console.log('clinic create error', action.err)
            return state
        default: 
        return state
    }
}

export default clinicsReducer