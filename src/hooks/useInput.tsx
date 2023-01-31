import {InputProps} from "../types/InputProps";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {FormContext} from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, 'source'>, Pick<InputProps, 'validate'> {
}

function min(minNum: number): number {
    return minNum;
}

function max(maxNum: number): number {
    return maxNum;
}

function validateMinMax(input: any, min: number, max: number): string {
    if (input && input.length < min) 
        return "must be greater than 5";

    else if (input && input.length > max) 
        return "cannot exceed 10";

    else
        return ""
}

function disableBtn(error: string) {
    const btn = document.getElementById("submit-btn") as HTMLButtonElement | null;

    if (error && btn != null) 
        btn.disabled = true;

    else if (!error && btn != null) 
        btn.disabled = false;
}

function useInput(props: UseInputProps) {
    const {setValues, values} = useContext(FormContext);
    const [ error, setError ] = useState("");

    const onChange = useCallback((v: string | number) => {
        setError(validateMinMax(v, props.validate[0], props.validate[1]));

        setValues({
            ...values,
            [props.source]: v,
        });

        disableBtn(error);
    }, [values, props.source]);
    
    return {value: values[props.source], onChange, error}
}

export {min, max, useInput};
