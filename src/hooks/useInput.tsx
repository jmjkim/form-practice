import {InputProps} from "../types/InputProps";
import React, {useCallback, useContext} from "react";
import {FormContext} from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, 'source'> {
}

function useInput(props: UseInputProps) {
    const {setValues, values} = useContext(FormContext);
    const onChange = useCallback((v: string | number) => {
        setValues({
            ...values,
            [props.source]: v,
        });
    }, [values, props.source]);

    return {value: values[props.source], onChange}
}

export default useInput;
