import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions'; 
import { Button } from '../components/Button';
import { BufferView } from './decorators';


storiesOf('Button', module)
.addDecorator(BufferView)
.add('default',()=>(
    <Button onPress={action('tapped-default')}>Log in </Button>
))
.add('outline',()=>(
    <Button onPress={action('tapped-outline')} outline>Log in </Button>
))