import {InputProps} from "../types/InputProps";
import {useCallback, useContext} from "react";
import {FormContext} from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, 'source'>, Pick<InputProps, 'validate'> {
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
        });
    }, [values]);

    return {value: values[props.source], onChange, errors}
}

export default useInput;
