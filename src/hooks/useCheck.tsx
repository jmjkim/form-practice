import { CheckboxProps } from "../types/CheckboxProps";
import { useCallback, useContext } from "react";
import { FormContext } from "../components/SimpleForm" 

interface UseCheckboxProps extends Pick<CheckboxProps, 'source'> {
} 

const useCheck = (props: UseCheckboxProps) => {
    const { checkboxValues, setCheckboxValues } = useContext(FormContext);

    const onCheck = useCallback((e: any) => {
        setCheckboxValues({
            ...checkboxValues,
            [props.source]: e,
        });
    }, [checkboxValues]);

    return {onCheck};
}

export default useCheck;