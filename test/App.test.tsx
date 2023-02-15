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

describe('', () => {
    it('should render TextField', () => {
        render(
            <SimpleForm>
                <TextField
                    data-testid={'name'}
                    source={'name'}
                    label={'name'}
                    validate={[min(5), max(10)]}
                />
                {/* <TextField
                    data-testid={'password'}
                    source={'password'}
                    label={'password'}
                    validate={[min(5), max(10)]}
                /> */}
            </SimpleForm>
        );
        
        userEvent.type(screen.getByLabelText('name'), 'a'.repeat(11));
        // expect(input.container).toBeInTheDocument();
        // expect(input.getByText('반드시 10자 이하로 입력해주세요.')).toBeInTheDocument();
    })
});
