const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <input
            type={type}
            id={name}
            name={name}
            className="text-sm border rounded-full py-2 px-5 text-slate-700 placeholder: opacity-50 w-full"
            placeholder={placeholder}
        />
    );
};

export default Input;
