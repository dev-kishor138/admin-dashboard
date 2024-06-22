import cn from "../lib/cn";


const Input = ({type, placeholder, className,value, name, onChange}) => {
    return (
        <input type={type} placeholder={placeholder} className={cn('outline-none py-2 px-2 rounded-md text-md',className)} value={value} name={name} onChange={onChange} />
    );

};

export default Input;