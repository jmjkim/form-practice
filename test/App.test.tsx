/**
 * @jest-environment jsdom
 */

import 'jest';
import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {min, max} from "../src/utils/utils";
import SimpleForm from "../src/components/SimpleForm";
import TextField from "../src/components/TextField";

describe('Conducting a SimpleForm-TextField Test', () => {
    render(
        <SimpleForm>
            <TextField
            source={'name'}
            label={'name'}
            validate={[min(5), max(10)]}
            />

            <TextField
            source={'password'}
            label={'password'}
            validate={[min(5), max(10)]}
            />
        </SimpleForm>
    );

    const nameInput = screen.getByLabelText('name');
    const passwordInput = screen.getByLabelText('password');

    test('TextFields for Name and Password should be rendered', () => {
        expect(nameInput);
        expect(passwordInput);
    });

    test('Input values for Name and Password should be validated(min(5), max(10))', () => {
        userEvent.type(nameInput, 'abc');
    })
    
    screen.debug();
});
