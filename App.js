//this is a test 
//where are you going 
import React from 'react';
import Navigator from './src/AppNavigator'
import LoginForm from './src/screens/LoginForm';
import {connect,Provider} from 'react-redux'; 
import {store} from './src/store'
class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    if(this.props.isUserLoggedIn)
    return (<Navigator />)
    else 
    return(<LoginForm />)
  }
}
const mapStateToProps= (state) => {
  return{
    isUserLoggedIn: state.isUserLoggedIn,
  }
}
const AppContainer=connect(mapStateToProps)(App)

export default class  ReduxApp extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <AppContainer />
      </Provider>
    )
  }
}