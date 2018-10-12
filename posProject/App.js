import React, {Component} from 'react';
import {AppRegistry, SectionList, StyleSheet, Alert, View} from 'react-native';
import Login from "./app/screen/login"
import SignUpView from "./app/screen/register"


export default class SectionListBasics extends Component {
    state = {
        signup: false
    }

    myfunction(data) {
        Alert.alert("Alert", "Button pressed " + data);
        if (data == 'register') {
            this.setState({
                signup: true
            })
        }
    }

    render() {
        if (this.state.signup) {
            return (
                <SignUpView />
            );
        } else {
            return (
                <Login onLoginPageClick={this.myfunction.bind(this)}/>
            );
        }

    }
}
