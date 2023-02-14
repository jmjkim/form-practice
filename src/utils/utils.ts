const min = (minNum: number) => (value: string): string | undefined => {
    if (value.length < minNum) {
        return `반드시 ${minNum}자 이상 입력해주세요.`;
    }
}

const max = (maxNum: number) => (value: string): string | undefined => {
    if (value.length > maxNum) {
        return `반드시 ${maxNum}자 이하로 입력해주세요.`;
    }
}

const required = () => (value: string | any[]): string | undefined => {
    if (Array.isArray(value) && value.length === 0) {
        return "반드시 선택해주세요.";
    }

    if (value === "") {
        return "반드시 선택해주세요.";
    }
}

export {min, max, required};