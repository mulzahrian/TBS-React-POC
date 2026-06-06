import { Fragment, useState, useEffect, useRef } from "react";
import MainLayout from "../../components/layout/MainLayout";
import PageContainer from "../../components/fragments/PageContainer";
import CardProduct from "../../components/fragments/CardProduct";
import { getProducts } from "../../services/product.service";
import { useLogin } from "../../hooks/useLogin";

const SystemValues = () => {
    return (
        <MainLayout>
            <PageContainer title="System Values">
                <Fragment>
                    <div className="flex justify-center py-5"></div>
                </Fragment>
            </PageContainer>
        </MainLayout>
    );
};

export default SystemValues;
