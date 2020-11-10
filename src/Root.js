//Inside of here we're going to create and export a component that creates our provider tag and Redux store
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from 'reducers'

export default props => {
    return (
        <Provider store={createStore(reducers, {})}>
            {props.children}
        </Provider>
    );
};