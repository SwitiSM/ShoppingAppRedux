import {connect} from 'react-redux'
import UserName from '../components/UserName'
import {ChangeUserName} from '../actions/startupActions'

export default connect(null,{ChangeUserName})(UserName)