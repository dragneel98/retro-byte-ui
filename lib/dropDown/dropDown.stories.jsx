import { DropDown } from "./DropDown"


export default {
    title: "Components/DropDown",
    component: DropDown,
    tags: ['autodocs'],
    args: {
        placeholder: "options",
        options: [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ],
    }
}

export const Primary = {
    args: {
        placeholder: "options",
        options: [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ],
    }
}