import { SelectboxProps } from "../types/SelectboxProps";
import { useCallback, useContext } from "react";
import { FormContext } from "../components/SimpleForm" 

interface UseSelectboxProps extends Pick<SelectboxProps, 'source'> {
} 

const useSelect = (props: UseSelectboxProps) => {
    const { selectboxValues, setSelectboxValues } = useContext(FormContext);

    const onSelect = useCallback((e: any) => {
        setSelectboxValues({
            ...selectboxValues,
            [props.source]: e,
        });
    }, [selectboxValues]);

    return {onSelect};
}

export default useSelect;