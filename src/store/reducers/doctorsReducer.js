const initialState = {
    doctor: 'lll'
}

const doctorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_DOCTOR': 
            console.log('created doctor', action.doctor)
            return state
        case 'CREATE_DOCTOR_ERROR':
            console.log('doctor create error', action.err)
            return state
        default: 
        return state
    }
}

export default doctorsReducer