import {HTMLInputTypeAttribute} from "react";

export interface InputProps {
    testId?: string;
    source: string;
    label: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute

    validate: ((value: string) => string | undefined)[];
}
