const initialState = {
    appointments: [
        {title: 'sick', time: '5pm'},
        {title: 'checkup', time: '5pm'},
        {title: 'surgery', time: '5pm'}
    ]
}
const appointmentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_APPOINTMENT': 
            console.log('created appointment', action.appointment)
            return state
        case 'CREATE_APPOINTMENT_ERROR':
            console.log('app create error', action.err)
            return state
        default: 
        return state
    }
}

export default appointmentsReducer