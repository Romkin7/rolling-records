import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import ProductCard from '../../components/ProductCard/ProductCard';
import { IPagination, IProduct } from '../../../@types';
import React, { FC, useEffect } from 'react';
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb';
import { ParsedUrlQuery } from 'querystring';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import Pagination from '../../components/Pagination/Pagination';
import { setPagination } from '../../store/actions/paginationActions';
import { setProducts } from '../../store/actions/productActions';
import { QueryReq } from '../../utils/queryClass';
import SortMenu from '../../components/SortMenu/SortMenu';

interface IProductsPageProps {
    prefetchedProducts: IProduct[];
    pagination: IPagination;
    initialTitle: string;
    query: any;
}

const WithServerSideDynamicProps: FC<IProductsPageProps> = ({
    prefetchedProducts,
    pagination,
    query,
    initialTitle,
}) => {
    const dispatch = useDispatch();
    const { title } = useSelector((state: AppState) => state.title);
    useEffect(() => {
        dispatch(setProducts(prefetchedProducts));
        dispatch(setPagination(pagination));
        return () => {
            return;
        };
    }, [pagination, prefetchedProducts]);
    const products = useSelector((state: AppState) => state.products);
    return (
        <>
            {products.length ? (
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
                                                : prefetchedProducts[0].category
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
                            <SortMenu query={query} />
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
                            : prefetchedProducts.map((product: IProduct) => {
                                  return (
                                      <ProductCard
                                          product={product}
                                          key={product._id}
                                      />
                                  );
                              })}
                    </div>
                    <div className="row d-flex justify-content-center my-3">
                        <div className="col-6 d-flex justify-content-center">
                            <Pagination query={query} />
                        </div>
                    </div>
                </div>
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
    const query = new QueryReq(context.query).filterQuery();
    const queryString = query.generateQueryString(query);
    const { page, search } = query;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let res: any;
    if (query.search) {
        res = await fetch(
            `http://localhost:8080/lp:t?page=${page}&search=${search}`,
        );
    } else {
        res = await fetch(`http://localhost:8080/lp:t${queryString}`);
    }
    const {
        products,
        title,
        pagination,
    }: { products: IProduct[]; title: string; pagination: IPagination } =
        await res.json();
    return {
        props: {
            prefetchedProducts: products,
            initialTitle: title,
            pagination,
            query: context.query,
        },
    };
};

export default WithServerSideDynamicProps;
