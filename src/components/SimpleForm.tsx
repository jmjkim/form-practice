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
        location: [],
    });
    const [errors, setErrors] = useState({});

    const value = useMemo(() => ({setValues, values, setErrors, errors}), [setValues, values, setErrors, errors]);

    // const valuesNotEmpty = Object.values(submitValues).every(val => val !== "");
    // const noErrors = Object.values(errors).every(err => err === "");

    console.log(values);
    
    const onClick = (e: any) => {
        e.preventDefault();
        
        // if (valuesNotEmpty && noErrors)
        alert(JSON.stringify(values));
    }

    return (
        <FormContext.Provider value={value}>
            <form>
                {children}
                <button type={'submit'} onClick={onClick}>
                    제출
                </button>
            </form>
        </FormContext.Provider>
    );
};

export default SimpleForm;
