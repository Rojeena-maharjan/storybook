// export default from '../storybook';

import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Form ,TextInput, Switch } from './components/Form';
import { Button } from './components/Button'

export default () => (
    <SafeAreaView style={{flex:1}}>
    <ScrollView>
        <Form header="LOGIN" footer="Not Registered yet? Sign Up">
            <TextInput label="Email" keyboardtype="email-address"/>
            <TextInput label="Password" secureTextEntry/>
            <TextInput label="Confirm Password" secureTextEntry/>
            <Switch label="Agree to terms"/>
            <Button>Sign Up</Button>
            <Button outline>Sign In</Button>
        </Form>
        </ScrollView>
    </SafeAreaView>
);