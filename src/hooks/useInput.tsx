import {InputProps} from "../types/InputProps";
import {useCallback, useContext} from "react";
import {FormContext} from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, 'source'>, Pick<InputProps, 'validate'> {
}

const min = (minNum: number) => (value: string): string | undefined => {
    if (value.length < minNum) {
        return `반드시 ${minNum}자 이상 입력해주세요.`;
    }
}

const max = (maxNum: number) => (value: string): string | undefined => {
    if (value.length > maxNum) {
        return `반드시 ${maxNum}자 이하로 입력해주세요.`
    }
}

function useInput(props: UseInputProps) {
    const { setValues, values, setErrors, errors } = useContext(FormContext);

    const onChange = useCallback((v: string) => {
        const errorMessages = props.validate.map(func => {
            return func(v);
        }).filter(errMessage => errMessage !== undefined);

        setErrors({
            ...errors,
            [props.source]: errorMessages[0],
        });

        setValues({
            ...values,
            [props.source]: v,
        })
    }, [values]);

    return {value: values[props.source], onChange, errors}
}

export {min, max, useInput};
