import {FunctionComponent} from 'react';
import {SelectboxProps} from "../types/SelectboxProps";
import useInput from '../hooks/useInput';

const SelectboxField: FunctionComponent<SelectboxProps> = ({source, label, validate}) => {
    const {value, onChange, errors} = useInput({source, validate});

    return (
        <div>
            <div style={{display: 'flex', gridGap: '8px'}}>
                <label htmlFor={source}>{label}</label>

                <select id={source} name={source} value={value} onChange={e => onChange(e.target.value)}>
                    <option value="">선택</option>
                    <option value="남">남</option>
                    <option value="여">여</option>
                    <option value="기타">기타</option>
                </select>
            </div>
            
            {errors[source] && (
                <div>
                    <p>{label} {errors[source]}</p>
                </div>
            )}
        </div>
    )
}

export default SelectboxField;