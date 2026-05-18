import { Fragment, use } from "react";
import Button from "../components/elements/Button";
import CardProduct from "../components/fragments/CardProduct";
import Counter from "../components/fragments/Counter";
import { useLogin } from "../hooks/useLogin";

const products = [
    {
        id: 1,
        title: "New Shoes",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi non quod deserunt.",
        price: 299,
        imageSrc: "/images/shoes-1.jpg",
    },
    {
        id: 2,
        title: "New Shoes",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi non quod deserunt.",
        price: 299,
        imageSrc: "/images/shoes-1.jpg",
    },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
    const username = useLogin();
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    };
    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {username}
            </div>
            <Button variant="danger" onClick={handleLogout}>
                LogOut
            </Button>
            <div className="flex justify-center py-5">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header imageSrc={product.imageSrc} />
                        <CardProduct.Body title={product.title}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
            </div>
        </Fragment>
    );
};

export default ProductsPage;
