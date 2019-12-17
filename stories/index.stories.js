import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {FloatingInput, GrowingTextarea} from '../src/index.js';
import './stories.scss';

storiesOf('FloatingInput', module)
    .add('Vanilla', () => <FloatingInput label="Floating" id="FloatingInput">Test123</FloatingInput>)
    .add('Styled', () => <FloatingInput className="TestInput" label="Styled Floating" inputClass="override-input" labelClass="override-label" id="StyledFloatingInput" />)
    .add('Number', () => <FloatingInput label="Num" type="number" id="NumberInput" />)
    .add('Month', () => <FloatingInput placeholder="" label="Date" type="month" id="MonthInput" />)
    .add('File (Not Compatible)', () => <FloatingInput label="Num" type="file" id="FileInput" />)
    .add('Image (Not Compatible)', () => <FloatingInput label="Num" type="image" id="ImageInput" />)
    .add('Checkbox (Not Compatible)', () => <FloatingInput label="Checkbox" type="Checkbox" id="CheckboxInput" />)
    .add('Submit (Not Compatible)', () => <FloatingInput type="submit" id="SubmitInput" />);

storiesOf('GrowingTextarea', module)
    .add('No Floating Label', () => <GrowingTextarea maxRows="4" />);
