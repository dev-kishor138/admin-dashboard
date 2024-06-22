import cn from "../lib/cn";


const Button = ({children, className, onClick}) => {
    return (
        <button className={cn( 'px-5 py-2 bg-blue-600 text-md font-semibold text-white rounded-sm', className)} onClick={onClick}>{children} </button>

    );
};

export default Button;