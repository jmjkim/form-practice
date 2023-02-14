import {createContext, PropsWithChildren, useMemo, useState} from 'react';

export const FormContext = createContext({
    setValues: (v: any) => {
    },
    values: {} as Record<string, any>,

    setErrors: (v: any) => {
    },
    errors: {} as Record<string, string>,
})

const SimpleForm = ({children}: PropsWithChildren<{}>) => {
    const [values, setValues] = useState({
        name: "",
        password: "",
        gender: undefined,
        location: [],
    });
    const [errors, setErrors] = useState({});
    const value = useMemo(() => ({setValues, values, setErrors, errors}), [setValues, values, setErrors, errors]);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const validInputs = Object.values(values).every(v => v !== undefined && v !== "" && v.length > 0);
        const noErrors = Object.values(errors).every(err => err === undefined);

        if (validInputs && noErrors) {
            alert(JSON.stringify(values));
        }
    }

    return (
        <FormContext.Provider value={value}>
            <form onSubmit={handleSubmit}>
                {children}
                <button type={'submit'}>
                    제출
                </button>
            </form>
        </FormContext.Provider>
    );
};

export default SimpleForm;
