import React, { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row mt-3 py-3">
                    <div className="col-md-4 col-sm-12 col-xs-12 text-center">
                        <h3>Rolling Records Tmi</h3>
                        <hr />
                        <h4>Verkkokauppa</h4>
                        <p>Y-tunnus: 2698592-8</p>
                        <p>
                            Rolling Records{' '}
                            <a className="link" href="/asiakaspalvelu">
                                <strong>Asiakaspalvelu</strong>
                            </a>
                        </p>
                        <p>
                            Käyttämällä sivustoamme, hyväksytte meidän
                            verkkokaupan{' '}
                            <a href="/kayttoehdot" className="link">
                                käyttöehdot
                            </a>
                            ,{' '}
                            <a className="link" href="/tietosuojaseloste">
                                tietosuojakäytäntömme
                            </a>{' '}
                            ja käyttämämme{' '}
                            <a className="link" href="/evasteet">
                                evästeet
                            </a>
                            .
                        </p>
                        <h4>Kauppapaikka</h4>
                        <p>
                            Kauppapaikan{' '}
                            <a
                                className="link"
                                href="/kauppapaikan-kayttoohjeet"
                            >
                                käyttöohjeet
                            </a>
                        </p>
                        <hr />
                        <p>
                            Rolling Records Tmi ©2015. All Rights Reserved.
                            <br />
                            Made with ❤ by
                            <a
                                className="link"
                                href="https://www.devdesign.fi"
                                target="__blank"
                            >
                                DevDesign
                            </a>
                            .
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <h3 className="text-center">Maksutavat</h3>
                        <hr />
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-4">
                                <a href="https://www.paytrail.fi">
                                    <img
                                        src="/images/paytrail_logo.svg"
                                        alt="Paytrail Rolling Records"
                                    />
                                </a>
                                <p className="mt-2">
                                    Paytrail{' '}
                                    <a
                                        href="https://www.paytrail.com/kuluttaja/maksupalveluehdot"
                                        className="link"
                                    >
                                        maksuehdot
                                    </a>
                                    .
                                </p>
                            </div>
                            <div className="col-md-4">
                                <a href="https://www.paypal.com/fi/home">
                                    <svg
                                        version="1.1"
                                        id="PPlogo"
                                        x="0px"
                                        y="0px"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 400 300"
                                        enableBackground="new 0 0 400 300"
                                    >
                                        <path
                                            fill="#179BD7"
                                            d="M311.504,127.797c-2.84-3.341-7.88-5.109-14.577-5.109h-20.012c-1.366,0-2.531,0.996-2.746,2.348
	l-8.092,51.308c-0.162,1.012,0.623,1.926,1.644,1.926h10.27c0.953,0,1.771-0.697,1.92-1.646l2.297-14.543
	c0.212-1.354,1.378-2.349,2.743-2.349h6.332c13.183,0,20.789-6.377,22.776-19.02C314.959,135.185,314.093,130.839,311.504,127.797z
	 M299.234,141.428c-1.092,7.18-6.576,7.18-11.885,7.18h-3.019l2.123-13.409c0.126-0.811,0.819-1.407,1.644-1.407h1.385
	c3.609,0,7.021,0,8.783,2.06C299.314,137.081,299.636,138.906,299.234,141.428z"
                                        />
                                        <path
                                            fill="#179BD7"
                                            d="M356.732,141.196h-9.573c-0.823,0-1.522,0.597-1.644,1.408l-0.426,2.681l-0.672-0.972
	c-2.074-3.012-6.697-4.018-11.314-4.018c-10.588,0-19.629,8.021-21.392,19.271c-0.911,5.611,0.383,10.978,3.568,14.721
	c2.926,3.439,7.098,4.873,12.069,4.873c8.53,0,13.26-5.484,13.26-5.484l-0.426,2.66c-0.16,1.02,0.623,1.932,1.648,1.932h8.628
	c1.366,0,2.532-0.998,2.746-2.352l5.181-32.794C358.545,142.113,357.763,141.196,356.732,141.196z M343.379,159.848
	c-0.92,5.475-5.27,9.147-10.813,9.147c-2.776,0-5.006-0.892-6.435-2.583c-1.414-1.68-1.948-4.068-1.503-6.73
	c0.869-5.43,5.28-9.225,10.737-9.225c2.721,0,4.932,0.904,6.389,2.611C343.225,154.789,343.802,157.195,343.379,159.848z"
                                        />
                                        <path
                                            fill="#179BD7"
                                            d="M378.923,122.686h-9.246c-0.817,0.003-1.52,0.599-1.646,1.41l-8.213,52.248
	c-0.159,1.012,0.623,1.926,1.645,1.926h8.257c1.372,0,2.537-0.994,2.746-2.348l8.101-51.309
	C380.727,123.602,379.943,122.686,378.923,122.686z"
                                        />
                                        <path
                                            fill="#253B80"
                                            d="M168.79,127.797c-2.844-3.341-7.889-5.109-14.586-5.109h-20.01c-1.368,0-2.534,0.996-2.747,2.348
	l-8.093,51.308c-0.16,1.012,0.623,1.926,1.65,1.926h9.553c1.368,0,2.534-0.994,2.747-2.348l2.184-13.841
	c0.21-1.354,1.377-2.349,2.745-2.349h6.334c13.18,0,20.788-6.377,22.773-19.02C172.235,135.185,171.378,130.839,168.79,127.797z
	 M156.512,141.428c-1.094,7.18-6.58,7.18-11.884,7.18h-3.019l2.117-13.409c0.126-0.811,0.829-1.407,1.647-1.407h1.384
	c3.613,0,7.021,0,8.783,2.06C156.591,137.081,156.912,138.906,156.512,141.428z"
                                        />
                                        <path
                                            fill="#253B80"
                                            d="M214.018,141.196h-9.584c-0.816,0-1.521,0.597-1.646,1.408l-0.427,2.681l-0.67-0.972
	c-2.073-3.012-6.699-4.018-11.314-4.018c-10.589,0-19.632,8.021-21.395,19.271c-0.914,5.611,0.387,10.978,3.57,14.721
	c2.92,3.439,7.099,4.873,12.069,4.873c8.531,0,13.263-5.484,13.263-5.484l-0.427,2.66c-0.162,1.02,0.623,1.932,1.645,1.932h8.631
	c1.371,0,2.53-0.998,2.748-2.352l5.178-32.794C215.822,142.113,215.039,141.196,214.018,141.196z M200.659,159.848
	c-0.925,5.475-5.269,9.147-10.811,9.147c-2.783,0-5.006-0.892-6.435-2.583c-1.416-1.68-1.954-4.068-1.503-6.73
	c0.863-5.43,5.28-9.225,10.737-9.225c2.722,0,4.933,0.904,6.391,2.611C200.499,154.789,201.077,157.195,200.659,159.848z"
                                        />
                                        <path
                                            fill="#253B80"
                                            d="M265.046,141.196h-9.629c-0.917,0-1.78,0.457-2.303,1.22l-13.28,19.563l-5.629-18.797
	c-0.354-1.176-1.439-1.984-2.668-1.984h-9.461c-1.151,0-1.948,1.124-1.582,2.207l10.605,31.124l-9.972,14.074
	c-0.786,1.107,0.006,2.635,1.36,2.635h9.617c0.91,0,1.769-0.446,2.285-1.194l32.026-46.226
	C267.184,142.711,266.395,141.196,265.046,141.196z"
                                        />
                                        <path
                                            fill="#179BD7"
                                            d="M90.342,128.388c-1.059-1.203-2.372-2.2-3.909-3.013l0,0c-0.082,0.523-0.174,1.059-0.28,1.609
	c-0.1,0.513-0.209,1.013-0.322,1.507c-3.497,15.281-13.26,21.832-25.986,23.21c-0.848,0.092-1.709,0.16-2.583,0.207
	c-0.96,0.052-1.935,0.076-2.923,0.076h-8.051c-1.935,0-3.564,1.404-3.866,3.314l-3.651,23.152l-0.472,2.99l-1.166,7.412
	c-0.197,1.25,0.769,2.383,2.033,2.383h14.28c1.691,0,3.127-1.229,3.395-2.896l0.14-0.727l2.688-17.063l0.173-0.939
	c0.263-1.674,1.703-2.901,3.395-2.901h2.136c13.836,0,24.667-5.616,27.833-21.874C94.526,138.046,93.842,132.376,90.342,128.388z"
                                        />
                                        <path
                                            fill="#253B80"
                                            d="M42.421,155.299l0.132-0.848l4.577-28.984c0.177-1.148,0.914-2.088,1.907-2.563
	c0.453-0.216,0.953-0.336,1.482-0.336H72.03c2.549,0,4.927,0.168,7.097,0.519c0.62,0.099,1.223,0.213,1.812,0.342
	c0.586,0.133,1.156,0.278,1.708,0.438c0.21,0.063,0.415,0.127,0.62,0.191c0.063,0.021,0.129,0.039,0.191,0.061
	c0.037,0.013,0.071,0.027,0.108,0.04c1.021,0.345,1.976,0.745,2.857,1.211c0.004,0.002,0.008,0.001,0.012,0.004
	c1.077-6.868-0.009-11.542-3.722-15.776c-4.093-4.66-11.48-6.656-20.934-6.656H34.336c-1.931,0-3.579,1.404-3.877,3.316
	l-11.432,72.458c-0.225,1.434,0.881,2.725,2.327,2.725h16.941l0.472-2.99L42.421,155.299z"
                                        />
                                        <path
                                            fill="#222D65"
                                            d="M86.425,125.371c-0.882-0.467-1.836-0.867-2.857-1.211c-0.037-0.013-0.071-0.027-0.108-0.04
	c-0.063-0.021-0.128-0.04-0.191-0.061c-0.205-0.064-0.41-0.128-0.62-0.191c-0.553-0.16-1.123-0.306-1.708-0.438
	c-0.588-0.129-1.191-0.243-1.812-0.342c-2.17-0.351-4.548-0.519-7.097-0.519H50.52c-0.53,0-1.03,0.12-1.482,0.336
	c-0.993,0.475-1.73,1.414-1.907,2.563l-4.577,28.985l-0.132,0.846c0.302-1.908,1.932-3.313,3.866-3.313h8.051
	c0.988,0,1.963-0.025,2.923-0.078c0.874-0.047,1.735-0.114,2.583-0.207c12.727-1.377,22.489-7.93,25.986-23.209
	c0.113-0.494,0.223-0.994,0.322-1.507c0.106-0.551,0.199-1.086,0.28-1.609C86.431,125.374,86.428,125.372,86.425,125.371z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12 text-center">
                        <h3 className="text-center">Yhteystiedot</h3>
                        <hr />
                        <h4>Sähköposti:</h4>
                        <p>
                            <i
                                className="fa fa-envelope"
                                aria-hidden="true"
                            ></i>{' '}
                            rollingrecords@outlook.com
                        </p>
                        <h4>Helsinki Sörnäinen</h4>
                        <p>
                            <i className="fa fa-phone" aria-hidden="true"></i>{' '}
                            +358 50 344 55 39
                        </p>
                        <p>
                            <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                            ></i>{' '}
                            <a
                                data-toggle="modal"
                                data-target="#locationMapModal"
                            >
                                Vaasanpolku 3, liikehuoneisto 6
                            </a>
                        </p>
                        <p>00500, Helsinki</p>
                        <h4>Aukioloajat</h4>
                        <p>ma - pe: 11 - 18</p>
                        <p>la: 11 - 16</p>
                        <p>su: 12 - 16</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
