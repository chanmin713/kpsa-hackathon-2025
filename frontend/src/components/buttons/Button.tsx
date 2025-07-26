export interface ButtonProps {
    children: React.ReactElement;
    onClick: () => void;
    disabled?: boolean;
}

export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </button>
    )
}