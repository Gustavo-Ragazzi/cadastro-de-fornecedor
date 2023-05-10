interface Form {
    label: string;
    type: string;
    name: string;
    id: string;
    className: string;
    required?: boolean;
}

export default function Input(props: Form) {
    return (
        <div className="w-2/3 m-auto">
            <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor={props.name}
            >{props.label}</label>
            <input 
                className={props.className}
                type={props.type}
                name={props.name}
                id={props.id}
                required={props.required}
            />
        </div>
    );
}
  