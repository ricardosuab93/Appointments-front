import { configureStore } from '@reduxjs/toolkit'
import appointments from './reducers/appointmentsReducer/index.js'


const store = configureStore({
    reducer: {
        appointments
    }
})

export default store