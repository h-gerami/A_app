import React ,{Component} from 'react';
import Navigations from './components/Navigations/Navigations';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import reducers from './Reducers';
import ReduxThunk from 'redux-thunk'
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const store = createStore(reducers , {} , applyMiddleware(ReduxThunk));
        return(
            <Provider store = {store}>
                <Navigations/>
            </Provider>
        );
    }
}
export default App;