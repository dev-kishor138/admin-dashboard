import cn from "../../lib/cn";


const Container = ({ children, className }) => {
    return (
        <div className={cn("lg:py-10", className)
        }>
            <div className="container mx-auto px-5 lg:px-10">
                {children}
            </div>

        </div>
    );
};

export default Container;