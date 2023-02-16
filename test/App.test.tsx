/**
 * @jest-environment jsdom
 */

import 'jest';
import React from "react";
import {render, screen} from "@testing-library/react";
import { fireEvent } from '@testing-library/react';

import {min, max} from "../src/utils/utils";
import SimpleForm from '../src/components/SimpleForm';
import TextField from "../src/components/TextField";

describe('<TextField />', () => {
    it('render error messages if validation fails', () => {
        render(
            <SimpleForm>
                <TextField 
                source={'name'}
                label={'이름'}
                validate={[min(5), max(10)]}
                />

                <TextField 
                source={'password'}
                label={'비밀번호'}
                validate={[min(5), max(10)]}
                />
            </SimpleForm>
        );

        const name = screen.getByLabelText('이름');
        const password = screen.getByLabelText('비밀번호');

        fireEvent.change(name, {target: {value: 'x'}});
        fireEvent.change(password, {target: {value: 'x'}});
        expect(screen.getAllByText(/이상 입력해주세요./));

        fireEvent.change(name, {target: {value: 'x'.repeat(11)}});
        fireEvent.change(password, {target: {value: 'x'.repeat(11)}});
        expect(screen.getAllByText(/이하로 입력해주세요./));

        screen.debug();
    })
});
