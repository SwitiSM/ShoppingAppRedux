import {connect} from 'react-redux'
import {ChangeUserPassword} from '../actions/startupActions'
import Password from '../components/Password'


export default connect(null,{ChangeUserPassword}) (Password)