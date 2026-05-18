import Button from "../elements/Button";
import { Link } from "react-router-dom";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-sm bg-purple-300 border border-purple-700 rounded-lg shadow-lg mx-2 flex flex-col justify-between">
            {children}
        </div>
    );
};

const Header = (props) => {
    const { imageSrc, id } = props;
    return (
        <Link to={`/dashboards/${id}`}>
            <img
                src={imageSrc}
                alt="Product Image"
                className="p-8 rounded-t-lg h-60 w-full object-cover"
            />
        </Link>
    );
};

const Body = (props) => {
    const { title, children } = props;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-light text-center text-white">
                    {title}
                </h5>
                <p className="text-white text-sm mt-2">{children.substring(0, 100)}</p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const { price, handleAddToCart, id, showButton = true } = props;

    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-3xl font-bold text-white">Rp.{price}</span>

            {showButton && (
                <Button
                    className="bg-black text-purple-600 hover:bg-gray-200 font-bold py-2 px-4 rounded"
                    onClick={() => handleAddToCart(id)}
                >
                    Add to Cart
                </Button>
            )}
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
