import {InputProps} from "../types/InputProps";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {FormContext} from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, 'source'>, Pick<InputProps, 'validate'> {
}

const min = (minNum: number) => (value: string): string | undefined => {
    if (value.length < minNum) {
       return `반드시 ${minNum}자 이상 입력해주세요.`;
    }
}

function max(maxNum: number) {
    return (value: string) => {
        if (value.length > maxNum) {
            return `반드시 ${maxNum}자 이하로 입력해주세요.`;
        }
    }
}

function useInput(props: UseInputProps) {
    const {setValues, values, errors, setErrors} = useContext(FormContext);

    const onChange = useCallback((v: string) => {
        props.validate.forEach(f => {
           const errorMessage = f(v);
           if (errorMessage) {
               setErrors({
                   ...errors,
                   [props.source]: errorMessage,
               })
           }
        });

        setValues({
            ...values,
            [props.source]: v,
        });
    }, [values, props.source]);
    
    return {value: values[props.source], onChange, error}
}

export {min, max, useInput};
