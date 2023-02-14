/**
 * @jest-environment jsdom
 */
import {render} from "@testing-library/react";
import SimpleForm from "../src/components/SimpleForm";
import TextField from "../src/components/TextField";
import {max, min} from "../src/hooks/useInput";
import userEvent from "@testing-library/user-event";

describe('', () => {
    it('should render TextField', () => {
        const input = render(
            <SimpleForm>
                <TextField
                    testId={'name'}
                    source={'name'}
                    label={'name'}
                    validate={[min(1), max(10)]}
                />
                <TextField
                    source={'password'}
                    label={'password'}
                    validate={[min(1), max(8)]}
                />
            </SimpleForm>
        );

        userEvent.type(input.getByRole('input'), 'a'.repeat(11));

        expect(input.container).toBeInTheDocument();
        expect(input.getByText('반드시 10자 이하로 입력해주세요.')).toBeInTheDocument();
    })
});
