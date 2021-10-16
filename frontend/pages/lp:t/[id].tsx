import { GetServerSideProps } from 'next';
import { IProduct } from '../../../@types';
import Layout from '../../components/Layout';
import React, { FC } from 'react';
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb';
import Picture from '../../components/Picture/Picture';
import List from '../../components/List/List';
import { setProductsName } from '../../utils/utils';

interface IProductPageProps {
    product?: IProduct;
    errors?: string[];
}

const ProductPage: FC<IProductPageProps> = ({ product, errors }) => {
    if (errors) {
        return (
            <>
                <h1>Error 404!</h1>
                <p>Sivua ei löytynyt!</p>
            </>
        );
    }

    return (
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
                                active: false,
                                className: 'breadcrumb-item',
                            },
                            {
                                id: 2,
                                text: `Kaikki ${product.category} ${
                                    product.productType === 'lp'
                                        ? 'LP:t'
                                        : product.productType === 'cd'
                                        ? 'CD:t'
                                        : product.productType === 'Kasetti'
                                        ? 'Kasetit'
                                        : product.productType === '7-Tuumaiset'
                                        ? '7"'
                                        : 'Oheistarvikkeet'
                                }`,
                                href: `/lp:t?productType=${product.productType}&category=${product.category}&page=1`,
                                ariaCurrent: 'page',
                                active: false,
                                className: 'breadcrumb-item',
                            },
                            {
                                id: 3,
                                text: `${setProductsName(product)}`,
                                href: `/lp:t/${product._id}`,
                                ariaCurrent: 'page',
                                active: true,
                                className: 'breadcrumb-item',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-7">
                    <Picture
                        src={
                            product.cover_marketplace.secure_url ||
                            product.cover
                        }
                        alt={`${setProductsName(product)} ${
                            product.productType
                        }`}
                    />
                </div>
                <div className="col-md-5">
                    <h1>{setProductsName(product)}</h1>
                    <List
                        listItems={[
                            {
                                id: 1,
                                text: `EAN: ${product.ean}`,
                            },
                            { id: 2, text: `Genre: ${product.genre}` },
                            {
                                id: 3,
                                text: `Painos: ${product.edition}`,
                            },
                            {
                                id: 4,
                                text: `Tuotantoyhtiö: ${product.label}`,
                            },
                            {
                                id: 5,
                                text: `${
                                    product.releasedate
                                        ? `Julkaisupäivä: ${new Date(
                                              product.releasedate,
                                          ).toLocaleDateString('fi')}`
                                        : `Tuotantovuosi: ${product.year}`
                                }`,
                            },
                            {
                                id: 6,
                                text: `Kansien kunto: ${product.conditionCovers}, Levyn kunto: ${product.conditionDisk}`,
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    try {
        const id = params?.id;
        const res = await fetch('http://localhost:8080/lp:t/' + id);
        console.log(res);
        const { product }: { product: IProduct } = await res.json();
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { product } };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};
