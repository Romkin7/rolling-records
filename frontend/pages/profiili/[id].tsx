import { GetServerSideProps } from 'next';
import { IUser } from '../../../@types';
import Layout from '../../components/Layout';
import React, { FC } from 'react';
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb';

interface IProfilePageProps {
    user: IUser;
    errors?: string[];
}

const ProfilePage: FC<IProfilePageProps> = ({ user, errors }) => {
    if (errors) {
        return (
            <Layout
                title="Rolling Records - Record Shop Helsinki"
                content="Rolling Records Tmi LP-levykauppa, Ostetaan LP-levyjä, Myydän LP-levyjä, ostetaan vinyyliä, Asiantunteva palvelu. Helsinki, Sörnäinen +358 50 344 55 39 Vaasanpolku 3, liikehuoneisto 6 00500, Helsinki Aukioloajat ma - pe: 11 - 18 la: 11 - 16 su: 12 - 16"
            >
                <h1>Error 404!</h1>
                <p>Sivua ei löytynyt!</p>
            </Layout>
        );
    }

    return (
        <Layout
            title={`${user.username} profiili - Rolling Records Record Shop Helsinki`}
            content={`Rolling Records Record Shop Helsinki - ${user.username} profiili`}
        >
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
                                    text: `${user.username} profiili`,
                                    href: `/profiili/${user._id}`,
                                    ariaCurrent: 'page',
                                    active: false,
                                    className: 'breadcrumb-item',
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-7">
                        <h1>{user.username}</h1>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProfilePage;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    try {
        const id = params?.id;
        console.log('id is: ', id);
        const res = await fetch('http://localhost:8080/profile/' + id);
        console.log(res);
        const { user }: { user: IUser } = await res.json();
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { user } };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};
