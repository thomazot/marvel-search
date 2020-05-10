import React from 'react'
import { Provider } from 'react-redux'
import store from 'stores'
import Router from 'router'

const App: React.FC = () => (
    <Provider store={store}>
        <Router />
    </Provider>
)

export default App
