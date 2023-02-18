/**
 * @jest-environment jsdom
 */

// https://testing-library.com/docs/react-testing-library/setup/#skipping-auto-cleanup
import '@testing-library/react/dont-cleanup-after-each'

import React from "react";
import "@testing-library/jest-dom";
import {fireEvent, render} from "@testing-library/react";

import {min, max, required} from "../src/utils/utils";
import SimpleForm from '../src/components/SimpleForm';
import TextField from "../src/components/TextField";
import SelectboxField from "../src/components/SelectboxField";
import CheckboxField from "../src/components/CheckboxField";

describe('Testing for <TextField>, <SelectboxField> and <CheckboxField>', () => {
    describe('<TextField>', () => {
        const {getByLabelText, queryByText} = render(
            <SimpleForm>
                <TextField
                    source={'name'}
                    label={'이름'}
                    validate={[min(5), max(10)]}
                />
            </SimpleForm>
        );
        const name = getByLabelText('이름');

        it('#1 min(5) - it should render an error message if input length is less than 5.', () => {
            fireEvent.change(name, { target: { value: 'x'.repeat(4) } });
            expect(queryByText(/이상 입력해주세요./)).not.toBeNull();
        });
        
        it('#2 max(10) - it should render an error message if input length is greater than 10.', () => {
            fireEvent.change(name, { target: { value: 'x'.repeat(11) } });
            expect(queryByText(/이하로 입력해주세요./)).not.toBeNull();
        });

        it('#3 validated - it should not render an error message if input length is between 5-10.', () => {
            fireEvent.change(name, { target: { value: 'x'.repeat(6) } });
            expect(queryByText(/입력해주세요./)).toBeNull();
        });
    });

    describe('<SelectBoxField>', () => {
        const {getByRole, queryByText} = render(
            <SimpleForm>
                <SelectboxField
                    source={'gender'}
                    label={'성별'}
                    validate={[required()]}
                />
            </SimpleForm>
        );
        const selectElement = getByRole('combobox');

        it('#1 required() - it should render an error message if value is not selected.', () => {
            fireEvent.change(selectElement, { target: { value: '' } });
            expect(queryByText(/반드시 선택해주세요./)).not.toBeNull();
        });

        it ('#2 required() - it should not render an error message if value is selected.', () => {
            fireEvent.change(selectElement, { target: { value: '남' } });
            expect(queryByText(/반드시 선택해주세요./)).toBeNull();
        });
    });

    describe('<CheckboxField>', () => {
        const {queryAllByRole, queryByText} = render(
            <SimpleForm>
                <CheckboxField
                    type={'checkbox'}
                    source={'location'}
                    label={'거주 국가'}
                    validate={[required()]}
                />
            </SimpleForm>
        );
        const checkbox = queryAllByRole('checkbox');

        it('#1 required() - it should render an error message if value is not checked.', () => {
            fireEvent.click(checkbox[0]);
            fireEvent.click(checkbox[0]);
            expect(queryByText(/반드시 선택해주세요./)).not.toBeNull();
        });

        it('#2 required() - it should not render error message if at least one value(s) checked.', () => {
            fireEvent.click(checkbox[1])
            expect(queryByText(/반드시 선택해주세요./)).toBeNull();
        })
    });
});
