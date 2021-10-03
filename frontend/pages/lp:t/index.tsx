import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard/ProductCard';
import { IProduct } from '../../../@types';
import React, { FC, useEffect, useState } from 'react';
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb';
import { ParsedUrlQuery } from 'querystring';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import Pagination from '../../components/Pagination.tsx/Pagination';

interface IProductsPageProps {
    prefetchedProducts: IProduct[];
    initialTitle: string;
}

const WithServerSideDynamicProps: FC<IProductsPageProps> = ({
    prefetchedProducts,
    initialTitle,
}) => {
    const [products, setProducts] = useState<IProduct[]>(() => []);
    const stateProducts = useSelector((state: AppState) => state.products);
    const { pagination } = useSelector((state: AppState) => state.pagination);
    const { title } = useSelector((state: AppState) => state.title);
    useEffect(() => {
        setProducts(() => stateProducts);
        return () => {
            setProducts(() => []);
        };
    }, [stateProducts, setProducts]);
    return (
        <>
            {prefetchedProducts.length || products.length ? (
                <Layout
                    title={`Rolling Records - Record Shop Helsinki ${
                        title.title || initialTitle
                    }`}
                    content="Rolling Records Tmi LP-levykauppa, Ostetaan LP-levyjä, Myydän LP-levyjä, ostetaan vinyyliä, Asiantunteva palvelu. Helsinki, Sörnäinen +358 50 344 55 39 Vaasanpolku 3, liikehuoneisto 6 00500, Helsinki Aukioloajat ma - pe: 11 - 18 la: 11 - 16 su: 12 - 16"
                >
                    {console.log(products, prefetchedProducts)}
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
                                            text: title.title || initialTitle,
                                            href: `/lp:t?productType=${
                                                products.length
                                                    ? products[0].productType
                                                    : prefetchedProducts[0]
                                                          .productType
                                            }&category=${
                                                products.length
                                                    ? products[0].category
                                                    : prefetchedProducts[0]
                                                          .category
                                            }&page=1`,
                                            ariaCurrent: 'page',
                                            active: true,
                                            className: 'breadcrumb-item',
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <h1>{title.title || initialTitle}</h1>
                            </div>
                        </div>
                        <div className="row">
                            {products.length
                                ? products.map((product: IProduct) => {
                                      return (
                                          <ProductCard
                                              product={product}
                                              key={product._id}
                                          />
                                      );
                                  })
                                : prefetchedProducts.map(
                                      (product: IProduct) => {
                                          return (
                                              <ProductCard
                                                  product={product}
                                                  key={product._id}
                                              />
                                          );
                                      },
                                  )}
                        </div>
                        <div className="row d-flex justify-content-center my-3">
                            <div className="col-6 d-flex justify-content-center">
                                <Pagination pagination={pagination} />
                            </div>
                        </div>
                    </div>
                </Layout>
            ) : (
                <div></div>
            )}
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext<ParsedUrlQuery>,
) => {
    // Example for including dynamic props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const {
        page = 1,
        productType = 'lp',
        category = 'Uudet',
        search,
    } = context.query;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let res: any;
    if (search) {
        res = await fetch(
            `http://localhost:8080/lp:t?page=${page}&search=${search}`,
        );
    } else {
        res = await fetch(
            `http://localhost:8080/lp:t?page=${page}&productType=${productType}&category=${category}`,
        );
    }
    const { products, title }: { products: IProduct[]; title: string } =
        await res.json();
    return { props: { prefetchedProducts: products, initialTitle: title } };
};

export default WithServerSideDynamicProps;
