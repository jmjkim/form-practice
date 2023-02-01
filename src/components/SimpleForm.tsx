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
    
    const value = useMemo(() => ({setValues, values, errors, setErrors}), [setValues, values, errors, setErrors])

    const onClick = (e: any) => {
        e.preventDefault();

        // if (errors) {
        //     alert(JSON.stringify(values));
        // }
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
