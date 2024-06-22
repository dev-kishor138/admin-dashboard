import cn from "../../lib/cn";

const Logo = ({logoImage, className}) => {
    return (
        <img src={logoImage} alt="logo image" className={cn('h-[50px]', className)} />
    );
};

export default Logo;