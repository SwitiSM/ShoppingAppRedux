import React,{Component} from 'react'
import {KeyboardAvoidingView ,Image} from 'react-native'
import Password from '../containers/PasswordContainer';
import LoginBtn from '../containers/LoginBtnContainer';
import UserName from '../containers/UserNameContainer'

export default class LoginForm  extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <KeyboardAvoidingView style={{flex:1,justifyContent:'center',alignItems:"center"}} behavior="padding" enabled>
            <Image source={require("../resources/geek.jpg")} style={{height:300,width:300}} />
                <UserName />
                <Password />
                <LoginBtn />
            </KeyboardAvoidingView>
            )
    }
}