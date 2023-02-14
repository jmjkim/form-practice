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
        gender: "",
        location: [],
    });
    const [errors, setErrors] = useState({});
    // const [valid, setValid] = useState(false);
    const value = useMemo(() => ({setValues, values, setErrors, errors}), [setValues, values, setErrors, errors]);
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
    
        const validInputs = Object.values(values).every(v => v !== "" && v.length > 0);
        const noErrors = Object.values(errors).every(err => err === undefined);

        // const validateInputValues = (arr: any[]) => {
        //     const valid = arr.every(value => value !== "" && value.length > 0);

        //     if (valid) {
        //         setValid(true);
        //     }
        // }

        // validateInputValues(Object.values(values));

        // if (valid && noErrors) {
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
