import {FunctionComponent} from 'react';
import {CheckboxProps} from "../types/CheckboxProps";
import useCheck from '../hooks/useCheck';

const CheckboxField: FunctionComponent<CheckboxProps> = ({source, label, type}) => {
    const {onCheck} = useCheck({source})

    return (
        <div>
            <div style={{display: 'flex', gridGap: '8px'}}>
                <label htmlFor={source}>{label}</label>

                <input id={'대한민국'} name={source} type={type} value={'대한민국'} onChange={e => onCheck(e.target.value)}/>
                <label htmlFor={'대한민국'}>대한민국</label>

                <input id={'미국'} name={source} type={type} value={'미국'} onChange={e => onCheck(e.target.value)}/>
                <label htmlFor={'미국'}>미국</label>
            </div>
        </div>
    )
}

export default CheckboxField;