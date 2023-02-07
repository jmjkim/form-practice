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
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [selectboxValues, setSelectboxValues] = useState({});
    const [checkboxValues, setCheckboxValues] = useState({});

    const value = useMemo(() => ({
        setValues, values, setErrors, errors, setSelectboxValues, selectboxValues, setCheckboxValues, checkboxValues,
    }), [setValues, values, setErrors, errors, setSelectboxValues, selectboxValues, setCheckboxValues, checkboxValues]);

    const submitValues = {
        ...values,
        ...selectboxValues,
        ...checkboxValues,
    }

    const valuesNotEmpty = Object.values(submitValues).every(val => val !== "");
    const noErrors = Object.values(errors).every(err => err === "");

    console.log(submitValues, valuesNotEmpty, noErrors);

    const onClick = (e: any) => {
        e.preventDefault();

        if (valuesNotEmpty && noErrors)
            alert(JSON.stringify(submitValues));
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
