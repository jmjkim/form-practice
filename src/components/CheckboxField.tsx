import React, {FunctionComponent} from 'react';
import {CheckboxProps} from "../types/CheckboxProps";
import {useInput} from "../hooks/useInput";

const CheckboxField: FunctionComponent<CheckboxProps> = ({source, label, type}) => {
    const {onChange, value} = useInput({source, validate: []});

    const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            const newLocations = (value.location ?? []).concat(e.target.value);
            onChange(newLocations);
        } else {
            const newLocations = (value.location ?? []).filter((location: string) => location !== e.target.value);
            onChange(newLocations);
        }
    };
    // values = {
    //     name: '',
    //     password: '',
    //     gender: '',
    //     location: ['대한민국']
    // }

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