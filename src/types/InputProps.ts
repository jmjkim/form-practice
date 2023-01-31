import {HTMLInputTypeAttribute} from "react";

export interface InputProps {
    source: string;
    label: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute

    // validate has a function as a value that accepts a string and returns string or undefined value in array
    validate: ((value: string) => string | undefined)[];
}