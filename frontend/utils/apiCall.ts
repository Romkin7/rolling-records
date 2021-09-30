import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import store from '../store/store';
import { setLoading } from '../store/actions/loadingActions';
import { addMessage } from '../store/actions/messageActions';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setHeader(contentType: string, token: string | null) {
    axios.defaults.headers.post['Content-Type'] = contentType;
    if (token) {
        // tslint:disable-next-line
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        // tslint:disable-next-line
        delete axios.defaults.headers.common['Authorization'];
    }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const apiCall = async (
    method: AxiosRequestConfig['method'],
    path: AxiosRequestConfig['url'],
    data: AxiosRequestConfig['data'],
) => {
    store.dispatch(setLoading(true));
    return new Promise(
        (
            resolve: (value?: unknown) => void,
            reject: (reason?: unknown) => void,
        ) => {
            const config: AxiosRequestConfig = {
                url: path,
                method,
                data,
            };
            return axios(config)
                .then((res: AxiosResponse<unknown>) => {
                    return resolve(res.data);
                })
                .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        store.dispatch(
                            addMessage({
                                text: 'Aunauthorised',
                                bgColor: 'danger',
                                visible: true,
                            }),
                        );
                    }
                    return reject(
                        error.response && error.response.status === 401
                            ? {
                                  message:
                                      'Istuntosi on vanhentunut, kirjaudu uudelleen sisään!',
                              }
                            : error.response
                            ? error.response.data.error
                            : {
                                  message: 'Virhe palvelimella!',
                              },
                    );
                })
                .finally(() => {
                    store.dispatch(setLoading(false));
                });
        },
    );
};

export async function fetchProductsFunction(
    method: AxiosRequestConfig['method'],
    path: AxiosRequestConfig['url'],
    data: AxiosRequestConfig['data'],
) {
    const config: AxiosRequestConfig = {
        url: path,
        method,
        data,
    };
    const response = await axios(config);
    const { products } = response.data;
    return products;
}
