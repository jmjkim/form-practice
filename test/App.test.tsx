/**
 * @jest-environment jsdom
 */

import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import {min, max, required} from "../src/utils/utils";
import SimpleForm from '../src/components/SimpleForm';
import TextField from "../src/components/TextField";
import SelectboxField from "../src/components/SelectboxField";
import CheckboxField from "../src/components/CheckboxField";


describe('Testing for <TextField>, <SelectboxField> and <CheckboxField>', () => {    
    it('#1 <TextField> - render error messages if validation (min(5), max(10)) fails', () => {
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
        )

        const name = screen.getByLabelText('이름');
        const password = screen.getByLabelText('비밀번호');

        fireEvent.change(name, {target: {value: 'x'.repeat(4)}});
        fireEvent.change(password, {target: {value: 'x'.repeat(4)}});
        expect(screen.getAllByText(/이상 입력해주세요./))
        
        fireEvent.change(name, {target: {value: 'x'.repeat(11)}});
        fireEvent.change(password, {target: {value: 'x'.repeat(11)}});
        expect(screen.getAllByText(/이하로 입력해주세요./))

        // check valid input values
        // fireEvent.change(name, {target: {value: 'x'.repeat(6)}});
        // fireEvent.change(password, {target: {value: 'x'.repeat(6)}});
    })
    
    // it('#2 <SelectboxField> - render error messages if validation (required()) fails', () => {
    //     render(
    //         <SelectboxField
    //         source={'gender'}
    //         label={'성별'}
    //         validate={[required()]}
    //         />
    //     );
    //     const gender = screen.getByLabelText('성별') as HTMLInputElement;
    //     userEvent.selectOptions(gender, '남');
    //     userEvent.selectOptions(gender, '');
    //     // screen.debug()
    // })
    
    // it('#3 <CheckboxField> - render error messages if validation (required()) fails', () => {
    //     render(
    //         <CheckboxField
    //         type={'checkbox'}
    //         source={'location'}
    //         label={'거주 국가'}
    //         validate={[required()]}
    //         />
    //     );

    //     userEvent.click(screen.getByText('미국'));
    //     screen.debug();
    // })
});
