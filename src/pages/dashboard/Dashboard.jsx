import { Fragment, useState, useEffect, useRef } from "react";
import MainLayout from "../../components/layout/MainLayout";
import PageContainer from "../../components/fragments/PageContainer";
import CardProduct from "../../components/fragments/CardProduct";
import { getProducts } from "../../services/product.service";
import { useLogin } from "../../hooks/useLogin";

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
                    <div className="flex justify-center py-5"></div>
                </Fragment>
            </PageContainer>
        </MainLayout>
    );
};

export default Dashboard;
