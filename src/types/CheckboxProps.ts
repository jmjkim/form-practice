import {HTMLInputTypeAttribute} from "react";

export interface CheckboxProps {
    source: string;
    label: string;
    type: HTMLInputTypeAttribute;
    validate: ((value: string) => string | undefined)[];
}