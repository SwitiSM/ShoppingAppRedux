import {connect} from 'react-redux';
import LoginBtn from '../components/LoginBtn'
import {ChangeLoggedInState} from '../actions/startupActions'
mapStateToProps=(state)=>{
    return{
        UserName:state.UserName,
        Password:state.Password
    }
}
export default connect(mapStateToProps,{ChangeLoggedInState})(LoginBtn)