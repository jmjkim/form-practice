import {InputProps} from "../types/InputProps";
import {useCallback, useContext} from "react";
import {FormContext} from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, 'source'>, Pick<InputProps, 'validate'> {
}

const min = (minNum: number) => (value: string, obj: any): string | undefined => {
    if (value.length < minNum) {
        if (value === "") {
            delete obj.errors[obj.key];
        }

        else {
            return `반드시 ${minNum}자 이상 입력해주세요.`;
        }
    }

    else {
        delete obj.errors[obj.key];
    }
}

const max = (maxNum: number) => (value: string): string | undefined => {
    if (value.length > maxNum) {
        return `반드시 ${maxNum}자 이하로 입력해주세요.`
    }
}

function useInput(props: UseInputProps) {
    const { setValues, values, setErrors, errors } = useContext(FormContext);

    const objForErrors = {
        key: props.source,
        errors: errors,
    };

    const onChange = useCallback((v: string) => {
        props.validate.forEach(func => {
            const errorMessage = func(v, objForErrors);

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
        })
    }, [values, props.source]);

    return {value: values[props.source], onChange, errors}
}

export {min, max, useInput};
