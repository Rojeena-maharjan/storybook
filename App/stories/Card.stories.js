import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions'; 
import { Card } from '../components/Card';
import { BufferView } from './decorators';
import { Button } from '../components/Button'

storiesOf('Card', module)
.addDecorator(BufferView)
.add('default',()=>(
    <Card style={{backgrounColor:'red', padding:20}} >
        <Button>Hello</Button>
    </Card>
))