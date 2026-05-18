import { Fragment, useState, useEffect, useRef } from "react";
import MainLayout from "../components/layout/MainLayout";
import PageContainer from "../components/fragments/PageContainer";
import CardProduct from "../components/fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

const Dashboard = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const username = useLogin();

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    useEffect(() => {
        getProducts((response) => {
            setProducts(response);
            console.log("Products fetched in Dashboard:", response);
        });
    }, []);

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((p) => p.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
            return;
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }
    };

    return (
        <MainLayout>
            <PageContainer title="Dashboard">
                <Fragment>
                    <div className="flex justify-center py-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4">
                            {products.length > 0 &&
                                products.map((product) => (
                                    <CardProduct key={product.id}>
                                        <CardProduct.Header
                                            imageSrc={product.image}
                                            id={product.id}
                                        />
                                        <CardProduct.Body title={product.id}>
                                            {product.description}
                                        </CardProduct.Body>
                                        <CardProduct.Footer
                                            price={product.price}
                                            id={product.id}
                                            handleAddToCart={handleAddToCart}
                                        />
                                    </CardProduct>
                                ))}
                        </div>
                        <div className="w-1/4">
                            <h1 className="text-3xl font-bold text-purple-600 flex ml-5 mb-2">
                                Cart
                            </h1>
                            <table className="w-full mt-5 border-collapse text-left table-auto border border-spacing-x-5">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => {
                                        const product = products.find((p) => p.id === item.id);
                                        if (!product) return null;
                                        return (
                                            <tr key={item.id}>
                                                <td>{product.title}</td>
                                                <td>Rp.{product.price}</td>
                                                <td>{item.qty}</td>
                                                <td>Rp.{product.price * item.qty}</td>
                                            </tr>
                                        );
                                    })}
                                    <tr>
                                        <td colSpan="3">Total Price </td>
                                        <td>Rp.{totalPrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* counter */}
                    {/* <div className="mt-5 flex justify-center">
            <Counter></Counter>
        </div> */}
                </Fragment>
            </PageContainer>
        </MainLayout>
    );
};

export default Dashboard;
