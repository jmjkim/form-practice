import {FunctionComponent} from 'react';
import {SelectboxProps} from "../types/SelectboxProps";
import {useInput} from "../hooks/useInput";

const SelectboxField: FunctionComponent<SelectboxProps> = ({source, label, type}) => {
    const {onChange} = useInput({source, validate: []})

    const onSelect = (e: string) => onChange(e);

    return (
        <div>
            <div style={{display: 'flex', gridGap: '8px'}}>
                <label htmlFor={source}>{label}</label>
                
                <input id={'남'} name={source} type={type} value={'남'} onChange={e => onSelect(e.target.value)}/>
                <label htmlFor={'남'}>남</label>

                <input id={'여'} name={source} type={type} value={'여'} onChange={e => onSelect(e.target.value)}/>
                <label htmlFor={'여'}>여</label>

                <input id={'기타'} name={source} type={type} value={'기타'} onChange={e => onSelect(e.target.value)}/>
                <label htmlFor={'기타'}>기타</label>
            </div>
        </div>
    )
}

export default SelectboxField;