import React, {createContext, PropsWithChildren, useMemo, useState} from 'react';

export const FormContext = createContext({
    setValues: (v: any) => {
    },
    values: {} as Record<string, any>,
})

const SimpleForm = ({children}: PropsWithChildren<{}>) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState("");

    // {
    //     name: "반드시 5자 이상 입력해주세요",
    //     password: "반드시 10자 이하로 입력해주세요",
    // }

    const value = useMemo(() => ({setValues, values, errors, setErrors}), [setValues, values, errors, setErrors])

    const onClick = (e: any) => {
        e.preventDefault();
        if (errors) {
            // do nothing
        } else {
            alert(JSON.stringify(values));
        }
    }

    return (
        <FormContext.Provider value={value}>
            <form>
                {children}
                <button id={'submit-btn'} type={'submit'} onClick={onClick}>
                    제출
                </button>
            </form>
        </FormContext.Provider>
    );
};

export default SimpleForm;
