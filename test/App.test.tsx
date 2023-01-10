/**
 * @jest-environment jsdom
 */
import {render} from "@testing-library/react";
import SimpleForm from "../src/components/SimpleForm";
import TextField from "../src/components/TextField";

describe('', () => {
    it('should render TextField', () => {
        const input = render(
            <SimpleForm>
                <TextField
                    source={'name'}
                    label={'name'}
                />
            </SimpleForm>
        );

        //expect().toBeInDocument()
    })
});
