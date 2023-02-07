import React, {FunctionComponent} from 'react';
import {CheckboxProps} from "../types/CheckboxProps";
import {useInput} from '../hooks/useInput';

const CheckboxField: FunctionComponent<CheckboxProps> = ({source, label, type}) => {
    const {value} = useInput({source, validate: []});

    const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked ? value.push(e.target.value) : value.pop(e.target.value);

        /* The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand 
        when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. */

        // const newLocationArr = (value.location ?? []).filter((location: string) => location !== e.target.value);
    }

    return (
        <div>
            <div style={{display: 'flex', gridGap: '8px'}}>
                <label htmlFor={source}>{label}</label>

                <input id={'대한민국'} name={source} type={type} value={'대한민국'} onChange={e => onCheck(e)}/>
                <label htmlFor={'대한민국'}>대한민국</label>

                <input id={'미국'} name={source} type={type} value={'미국'} onChange={e => onCheck(e)}/>
                <label htmlFor={'미국'}>미국</label>
            </div>
        </div>
    )
}

export default CheckboxField;