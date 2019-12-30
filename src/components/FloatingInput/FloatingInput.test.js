/* eslint-disable */
import React, { useState } from 'react';
import { render, waitForDomChange, fireEvent, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FloatingInput from './index';

test('Renders Floating Label', () => {
    const {getByDisplayValue} = render(<div><FloatingInput value="working123"></FloatingInput></div>);

    expect(getByDisplayValue(/working123/i)).toBeTruthy();
});


test('Value Changes', () => {
    return new Promise((resolve, reject) => {
        const {getByDisplayValue, queryByDisplayValue, container} = render(<ClickTestElem/>);

        const toTest = getByDisplayValue(/test123/i);
    
        expect(toTest).toBeTruthy();
        expect(queryByDisplayValue(/O\.O/i)).toBeFalsy();
    
        waitForDomChange(container).then(() => {
            expect(queryByDisplayValue(/test123/i)).toBeFalsy();
            expect(queryByDisplayValue(/O\.O/i)).toBeTruthy();
            resolve();
        }).catch((err) => {
            reject(err);
        });

        fireEvent.click(toTest);
        fireEvent.click(toTest);
    });
});

test('Label Floats then Drops on Input', () => {
    return new Promise((resolve, reject) => {
        const {getByTestId, getByText, container} = render(<FloatingInput label="working123" data-testid="input1"></FloatingInput>);

        const inp = getByTestId("input1");
        const label = getByText("working123");
        expect(inp).toBeTruthy();
        expect(label).toBeTruthy()

       
    
        waitForDomChange(container).then(() => {
           expect(label).not.toHaveClass("floating");
           waitForDomChange(container).then(() => {
                expect(label).not.toHaveClass("floating");
                resolve();
           }).catch((err) => {
               reject(err)
           });

           fireEvent.change(inp, {target: { value: ''}});
        }).catch((err) => {
            reject(err);
        });

        fireEvent.change(inp, {target: { value: 'a'}});

        // fireEvent.click(toTest);
        // fireEvent.click(toTest);
    });
});

test('Label Floats on Input', () => {
    return new Promise((resolve, reject) => {
        const {getByTestId, getByText, container} = render(<FloatingInput label="working123" data-testid="input1"></FloatingInput>);

        const inp = getByTestId("input1");
        const label = getByText("working123");
        expect(inp).toBeTruthy();
        expect(label).toBeTruthy()

       
    
        waitForDomChange(container).then(() => {
           expect(label).toHaveClass("floating");
           resolve();
        }).catch((err) => {
            reject(err);
        });

        fireEvent.change(inp, {target: { value: 'a'}});

        // fireEvent.click(toTest);
        // fireEvent.click(toTest);
    });
});

const ClickTestElem = () => {
    const [test, setText] = useState('test123');

    return <FloatingInput onClick={(e) => { setText('O.O')}} value={test}/>
}