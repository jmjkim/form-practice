import React, {createContext, PropsWithChildren} from 'react';

export const FormContext = createContext({
    setValues: (v: any) => {
    },
    values: {} as Record<string, any>,
})

const SimpleForm = ({children}: PropsWithChildren<{}>) => {
    const [values, setValues] = React.useState({});
    const value = React.useMemo(() => ({setValues, values}), [setValues, values])

    const onClick = (e: any) => {
        e.preventDefault();
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
