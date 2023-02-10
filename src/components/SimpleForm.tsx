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
    const [values, setValues] = useState({ location: [] });
    const [errors, setErrors] = useState({});
    const value = useMemo(() => ({setValues, values, setErrors, errors}), [setValues, values, setErrors, errors]);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        const inputsNotEmpty = Object.values(formDataObj).every(v => v !== "")
        const noErrors = Object.values(errors).length === 0;

        if (inputsNotEmpty && noErrors) {
            alert(JSON.stringify(values))
        }
    }

    // const onClick = (e: any) => {
        // e.preventDefault();
        // if (noErrors) {
        //     alert(JSON.stringify(values));
        // }
    // }

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
