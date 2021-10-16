import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import BreadCrumb from '../components/Breadcrumb/Breadcrumb';
import ProductCard from '../components/ProductCard/ProductCard';
import { IProduct } from '../../@types';
import { fetchProductsFunction } from '../utils/apiCall';

interface IIndexPageProps {
    products: IProduct[];
}

const IndexPage: FC<IIndexPageProps> = ({ products }) => (
    <div className="container">
        <div className="row mt-3">
            <div className="col-md-12">
                <BreadCrumb
                    breadCrumbItems={[
                        {
                            id: 1,
                            text: 'Etusivu',
                            href: '/',
                            ariaCurrent: 'page',
                            active: true,
                            className: 'breadcrumb-item',
                        },
                    ]}
                />
            </div>
        </div>
        <div className="row">
            {products &&
                products.map((product: IProduct) => {
                    return <ProductCard product={product} key={product._id} />;
                })}
        </div>
    </div>
);

export const getStaticProps: GetServerSideProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const products = await fetchProductsFunction(
        'get',
        'http://localhost:8080',
        null,
    );
    return { props: { products } };
};

export default IndexPage;
