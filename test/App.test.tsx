/**
 * @jest-environment jsdom
 */

import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";

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
            </SimpleForm>
        )

        const name = screen.getByLabelText('이름');

        fireEvent.change(name, {target: {value: 'x'.repeat(4)}});
        expect(screen.getByText(/이상 입력해주세요./))

        fireEvent.change(name, {target: {value: 'x'.repeat(11)}});
        expect(screen.getByText(/이하로 입력해주세요./))

        // check valid input values
        fireEvent.change(name, {target: {value: 'x'.repeat(6)}});

        expect(screen.queryByText(/이하로 입력해주세요./)).toBeNull()
    })

    it('#2 <SelectboxField> - render error messages if validation (required()) fails', () => {
        const {getByRole} = render(
            <SimpleForm>
                <SelectboxField
                    source={'gender'}
                    label={'성별'}
                    validate={[required()]}
                />
            </SimpleForm>
        );
        const selectElement = getByRole('combobox');

        fireEvent.change(selectElement, { target: { value: '남' } });
        expect(selectElement).toHaveValue("남");
    })

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
