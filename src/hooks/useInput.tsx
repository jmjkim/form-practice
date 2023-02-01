import {InputProps} from "../types/InputProps";
import React, {useCallback, useContext} from "react";
import {FormContext} from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, 'source'>, Pick<InputProps, 'validate'> {
}

const min = (minNum: number) => (value: string, obj: errObj): string | undefined=> {
    if (value.length < minNum) {
        if (value.length === 0) {
            obj.setErrors({...obj.errors, [obj.key]: ""});
        }
        return `반드시 ${minNum}자 이상 입력해주세요.`

    } else {
        obj.setErrors({...obj.errors, [obj.key]: ""});
    }
}

const max = (maxNum: number) => (value: string, obj: errObj): string | undefined => {
    if (value.length > maxNum) {
        return `반드시 ${maxNum}자 이하로 입력해주세요.`;
    }

    else if (value.length === 0) {
        obj.setErrors({...obj.errors, [obj.key]: ""});
    }
}

function useInput(props: UseInputProps) {
    const { setValues, values, errors, setErrors } = useContext(FormContext);

    const errObj = {
        key: props.source,
        errors: errors, 
        setErrors: setErrors,
    };

    console.log(errors)

    const onChange = useCallback((v: string) => {
        props.validate.forEach(func => {
            const errorMessage = func(v, errObj);

            if (errorMessage) {
                setErrors({
                    ...errors,
                    [props.source]: errorMessage,
                });
            }

            setValues({
                ...values,
                [props.source]: v,
            });
        })

    }, [values, props.source]);

    return {value: values[props.source], onChange, errors}
}

export {min, max, useInput};
