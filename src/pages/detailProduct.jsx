import { Fragment, useState, useEffect, useRef } from "react";
import MainLayout from "../components/layout/MainLayout";
import PageContainer from "../components/fragments/PageContainer";
import CardProduct from "../components/fragments/CardProduct";
import { useParams } from "react-router-dom";
import { getDetailProducts } from "../services/product.service";

const DetailProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        getDetailProducts(id, (response) => {
            setProduct(response);
        });
    }, [id]);
    console.log("Detail Product fetched:", product);
    return (
        <MainLayout>
            <PageContainer title="Dashboard Detail">
                <Fragment>
                    <div className="flex justify-center">
                        <div className="w-full max-w-sm">
                            {product && product.id && (
                                <CardProduct key={product.id}>
                                    <CardProduct.Header imageSrc={product.image} id={product.id} />
                                    <CardProduct.Body title={product.id}>
                                        {product.description}
                                    </CardProduct.Body>
                                    <CardProduct.Footer price={product.price} showButton={false} />
                                </CardProduct>
                            )}
                        </div>
                    </div>
                </Fragment>
            </PageContainer>
        </MainLayout>
    );
};

export default DetailProductPage;
