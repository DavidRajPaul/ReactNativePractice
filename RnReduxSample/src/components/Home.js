import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { userNameChanged } from '../actions'

class Home extends Component {
    state = {}

    onUserNameChanged(text) {
        this.props.userNameChanged(text)
    }

    render() {
        console.log("this.props.usrName" + this.props.usrName)
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home Page</Text>
                <TextInput style={{ padding: 10, width: '70%' }}
                    placeholder='UserName'
                    onChangeText={this.onUserNameChanged.bind(this)}
                    value={this.props.usrName}
                ></TextInput>
                <TouchableOpacity style={{ height: 45, padding: 8, backgroundColor: 'pink' }}>
                    <Text>
                        Get Data
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        usrName: state.unr.username
    }
}

export default connect(mapStateToProps, { userNameChanged })(Home);