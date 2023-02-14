export interface SelectboxProps {
    source: string;
    label: string;
    validate: ((value: string) => string | undefined)[];
}