import styles from '../Icon/Icon.module.scss';

const amount = (
    <svg
        fill="currentColor"
        className="bi bi-cash"
        viewBox="0 0 24 24" 
    >
        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
    </svg>
);

const edit = (
    <svg
        fill="currentColor"
        className="bi bi-pencil-square"
        viewBox="0 0 24 24"
    >
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
        />
    </svg>
);

const plus = (
    <svg fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 19 19">
        <path
            fillRule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
        />
    </svg>
);

const minus = (
    <svg fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 19 19">
        <path
            fillRule="evenodd"
            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
        />
    </svg>
);

const remove = (
    <svg fill="currentColor" className="bi bi-x-lg" viewBox="0 0 19 19">
        <path
            fillRule="evenodd"
            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
        />
        <path
            fillRule="evenodd"
            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
        />
    </svg>
);

const login = (
    <svg
        fill="currentColor"
        className={`bi bi-box-arrow-in-right ${styles.iconNavbar}`}
        viewBox="0 0 24 24"
    >
        <path
            fillRule="evenodd"
            d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
        />
        <path
            fillRule="evenodd"
            d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
        />
    </svg>
);

const arrowLeft = (
    <svg fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 24 24">
        <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        />
    </svg>
);

const chat = (
    <svg
        fill="currentColor"
        className="bi bi-chat-left-text-fill"
        viewBox="0 0 24 24"
    >
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
    </svg>
);

const alert = (
    <svg
        fill="currentColor"
        className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
        viewBox="0 0 24 24"
        aria-label="Warning:"
    >
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
);

const loading = (
    <svg
        fill="currentColor"
        className="bi bi-arrow-repeat button--bi-arrow-repeat"
        viewBox="0 0 24 24"
    >
        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
        <path
            fillRule="evenodd"
            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
        />
    </svg>
);

const check = (
    <svg
        fill="#228C22"
        className="bi bi-check-lg responseMessage--header__icon"
        viewBox="0 0 24 24"
    >
        <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
    </svg>
);

const checkCircle = (
    <svg
        fill="currentColor"
        className="bi bi-check-circle-fill"
        viewBox="0 0 24 24"
    >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
);

const info = (
    <svg
        fill="currentColor"
        className="bi bi-info-circle-fill"
        viewBox="0 0 24 24"
    >
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </svg>
);

const trash = (
    <svg fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 24 24">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
    </svg>
);

const signup = (
    <svg
        fill="currentColor"
        className={`bi bi-person-plus ${styles.iconNavbar}`}
        viewBox="0 0 24 24"
    >
        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
        <path
            fillRule="evenodd"
            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
        />
    </svg>
);

const cart = (
    <svg
        fill="currentColor"
        className={`bi bi-cart ${styles.iconNavbar}`}
        viewBox="0 0 24 24"
    >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
);

const logout = (
    <svg
        fill="currentColor"
        className={`bi bi-box-arrow-right ${styles.iconNavbar}`}
        viewBox="0 0 24 24"
    >
        <path
            fillRule="evenodd"
            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
        />
        <path
            fillRule="evenodd"
            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
        />
    </svg>
);

const profile = (
    <svg
        fill="currentColor"
        className={`bi bi-person-circle ${styles.iconNavbar}`}
        viewBox="0 0 24 24"
    >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
    </svg>
);

const userBadge = (
    <svg fill="currentColor" className="bi bi-person-badge" viewBox="0 0 24 24">
        <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
    </svg>
);

const userLines = (
    <svg
        fill="currentColor"
        className="bi bi-person-lines-fill"
        viewBox="0 0 24 24"
    >
        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
    </svg>
);

const orders = (
    <svg fill="currentColor" className="bi bi-archive-fill" viewBox="0 0 24 24">
        <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
    </svg>
);

const marketplace = (
    <svg fill="currentColor" className="bi bi-shop" viewBox="0 0 24 24">
        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
    </svg>
);

const truck = (
    <svg fill="currentColor" className="bi bi-truck" viewBox="0 0 24 24">
        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
);

const gear = (
    <svg fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 24 24">
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
    </svg>
);

const klarna = (
    <svg viewBox="4.413 5.76850966 37.5527723 11.47054642">
        <g fill="none">
            <rect fill="#ffb3c7" height="25" rx="4.321" width="45" />
            <path
                d="m40.794 14.646a1.07 1.07 0 0 0 -1.066 1.076 1.07 1.07 0 0 0 1.066 1.076c.588 0 1.066-.482 1.066-1.076a1.07 1.07 0 0 0 -1.066-1.076zm-3.508-.831c0-.814-.689-1.473-1.539-1.473s-1.539.66-1.539 1.473.69 1.472 1.54 1.472 1.538-.659 1.538-1.472zm.006-2.863h1.698v5.725h-1.698v-.366a2.96 2.96 0 0 1 -1.684.524c-1.653 0-2.993-1.352-2.993-3.02s1.34-3.02 2.993-3.02c.625 0 1.204.193 1.684.524zm-13.592.746v-.745h-1.739v5.724h1.743v-2.673c0-.902.968-1.386 1.64-1.386h.02v-1.665c-.69 0-1.323.298-1.664.745zm-4.332 2.117c0-.814-.689-1.473-1.539-1.473s-1.539.66-1.539 1.473.69 1.472 1.54 1.472 1.538-.659 1.538-1.472zm.006-2.863h1.699v5.725h-1.699v-.366c-.48.33-1.059.524-1.684.524-1.653 0-2.993-1.352-2.993-3.02s1.34-3.02 2.993-3.02c.625 0 1.204.193 1.684.524zm10.223-.153c-.678 0-1.32.212-1.75.798v-.644h-1.691v5.724h1.712v-3.008c0-.87.578-1.297 1.275-1.297.746 0 1.176.45 1.176 1.285v3.02h1.696v-3.64c0-1.332-1.05-2.238-2.418-2.238zm-17.374 5.878h1.778v-8.275h-1.778zm-7.81.002h1.883v-8.279h-1.882zm6.586-8.279c0 1.792-.692 3.46-1.926 4.699l2.602 3.58h-2.325l-2.827-3.89.73-.552a4.768 4.768 0 0 0 1.902-3.837h1.842z"
                fill="#0a0b09"
            />
        </g>
    </svg>
);

const checkout = (
    <svg viewBox="0 0 247.4 178.6">
        <g fill="#2c2e83">
            <path d="M104.1 88.7H76.7c-24.4 0-44.3-19.9-44.3-44.3 0-11.8 4.6-22.9 13-31.3C53.8 4.6 64.9 0 76.7 0h12.5c5.5 0 10 4.5 10 10s-4.5 10-10 10H76.7c-6.5 0-12.6 2.5-17.2 7.2-4.6 4.6-7.1 10.7-7.1 17.1 0 13.4 10.9 24.3 24.3 24.3h27.4c6.5 0 12.5-2.5 17.1-7.1 4.6-4.6 7.2-10.7 7.2-17.2 0-5.5 4.5-10 10-10s10 4.5 10 10c0 11.8-4.6 22.9-13 31.3a43.88 43.88 0 0 1-31.3 13.1z" />
            <path d="M169 88.7h-12.5c-5.5 0-10-4.5-10-10s4.5-10 10-10H169c6.5 0 12.6-2.5 17.2-7.2 4.6-4.6 7.1-10.7 7.1-17.1 0-13.4-10.9-24.3-24.3-24.3h-27.4c-6.5 0-12.5 2.5-17.1 7.1-4.6 4.6-7.2 10.7-7.2 17.2 0 5.5-4.5 10-10 10s-10-4.5-10-10c0-11.8 4.6-22.9 13-31.3 8.3-8.4 19.5-13 31.3-13H169c24.4 0 44.3 19.9 44.3 44.3 0 11.8-4.6 22.9-13 31.3a44.2 44.2 0 0 1-31.3 13zM30 132.5c-1.2 0-1.7-1.3-3.9-2.7-1.5-1-3.7-1.8-7.4-1.8-9.6 0-13.9 6.7-13.9 18.6v8.8c0 12.5 3.9 18.6 13.5 18.6 3.9 0 6.5-1.2 8.3-2.4 1.7-1.2 2.7-2.3 3.6-2.3 1.4 0 2.1 1 2.1 2.1 0 1-.9 2.2-2.4 3.3-2.7 2.1-6.9 3.8-11.7 3.8-13.5 0-18.4-9.3-18.4-23v-8.9c0-13.2 5.2-23 18.8-23 5 0 9.1 1.6 11.3 3.5 1.4 1.2 2.2 2.4 2.2 3.2.2 1.2-.6 2.2-2.1 2.2zm33 45.8c-1.3 0-2.4-1-2.4-2.4v-21.6c0-5.4-1.5-9-7.8-9-5 0-8.5 2.1-10.3 5.5V176c0 1.3-1.1 2.4-2.4 2.4-1.3 0-2.4-1-2.4-2.4v-49c0-1.3 1-2.4 2.4-2.4 1.3 0 2.4 1 2.4 2.4v18c2.4-2.6 6-4 11-4 9.4 0 11.9 5.8 11.9 13.2V176c0 1.3-1.1 2.3-2.4 2.3zM99 159c0 1.3-.9 2-1.9 2H75.7v2.2c0 6.5 2.8 10.9 9.5 10.9 3.5 0 5.6-.5 7.1-1.1 1.7-.7 2.6-1.4 3.7-1.4 1 0 1.8.8 1.8 2s-1.4 2.3-3.5 3.1c-2.4 1-5.8 1.6-9.3 1.6-10.2 0-13.9-7.1-13.9-15.4v-6.8c0-8.2 3.8-15.2 14-15.2 10.4 0 13.9 6.6 13.9 15.3v2.8zm-13.9-14.2c-6.7 0-9.4 4.3-9.4 10.8v1.4h18.7v-1.5c0-6.4-2.3-10.7-9.3-10.7zm39.6 1.8c-2-1.1-4.1-1.5-6.8-1.5-6.2 0-9.7 4.9-9.7 11.8v5.4c0 7.4 3.2 11.9 9.6 11.9 2.4 0 4.7-.4 7-1.7 1.3-.6 2.3-.1 2.8.9.5 1.1.1 2.3-.9 2.8-2.9 1.6-6 2.2-9.1 2.2-9.8 0-14.1-6.8-14.1-16.2v-5.1c0-8.8 4.6-16.2 14.1-16.2 3 0 6.3.5 9 2.1 1.1.6 1.4 1.8.7 2.9-.3.8-1.4 1.3-2.6.7zm31.6 31.7c-.7 0-1.5-.4-2-1.3-3.2-6.3-7.4-12.5-11.6-18.1l-5.7 5.8V176c0 1.3-1.1 2.4-2.4 2.4-1.3 0-2.4-1-2.4-2.4v-49c0-1.3 1-2.4 2.4-2.4 1.3 0 2.4 1 2.4 2.4v31.9l16.9-17.4c.9-.8 2.2-.8 3.1 0 .8.8.8 2.2-.1 3l-11 11.2c4.5 6 8.9 12.7 12.4 19.4 1.1 1.8-.4 3.2-2 3.2zm18.6 0c-10.2 0-14.3-6.8-14.3-15v-7.4c0-8.3 4-15 14.3-15 10.2 0 14.3 6.7 14.3 15v7.4c-.1 8.3-4.1 15-14.3 15zm9.6-22.4c0-6.4-2.8-10.6-9.6-10.6-6.9 0-9.6 4.2-9.6 10.6v7.4c0 6.4 2.7 10.6 9.6 10.6 6.8 0 9.6-4.2 9.6-10.6v-7.4zm38.6 22.4a5.93 5.93 0 0 1-5.3-4.5c-2.5 2.9-6.3 4.6-11.6 4.6-9.3 0-11.9-5.9-11.9-13.3v-21.9c0-1.4 1.1-2.4 2.4-2.4 1.3 0 2.4 1 2.4 2.4v21.6c0 5.6 1.5 9 7.9 9 5.3 0 8.6-2.3 10.3-5.8v-24.7c0-1.4 1-2.4 2.4-2.4 1.3 0 2.4 1 2.4 2.4v26.4c0 3.2.7 4.1 2.4 4.8.8.4 1.3 1 1.3 1.8-.4 1.3-1.5 2-2.7 2zm22.1-.4h-1.8c-10 0-12.1-6.1-12.1-15.4v-17h-2.6c-1.2 0-2.1-1-2.1-2.1 0-1.2 1-2.1 2.1-2.1h2.6v-8.9c0-1.3 1-2.4 2.4-2.4s2.4 1 2.4 2.4v8.9h7.4c1.2 0 2.1.9 2.1 2.1 0 1.2-1 2.1-2.1 2.1H236v17c0 8 1.3 11 7.7 11h1.5c1.3 0 2.2 1 2.2 2.2 0 1.2-.9 2.2-2.2 2.2z" />
        </g>
    </svg>
);

const paypal = (
    <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24">
        <path
            fill="#003087"
            d="M19.148,1.809C18.036,0.543,16.028,0,13.458,0H6c-0.526,0-0.973,0.382-1.056,0.901L1.839,20.598c-0.054,0.349,0.184,0.677,0.533,0.732l0.1,0.008h4.605l1.157-7.335l-0.036,0.23c0.081-0.518,0.527-0.9,1.051-0.901h2.188c4.298,0,7.664-1.746,8.647-6.796c0.03-0.15,0.054-0.295,0.076-0.437c0.292-1.867-0.002-3.137-1.012-4.288L19.148,1.809L19.148,1.809z"
        />
        <path
            fill="#003087"
            d="M19.148,1.809C18.036,0.543,16.028,0,13.458,0H6c-0.526,0-0.973,0.382-1.056,0.901L1.839,20.598c-0.054,0.349,0.184,0.677,0.533,0.732l0.1,0.008h4.605l1.157-7.335l-0.036,0.23c0.081-0.518,0.527-0.9,1.051-0.901h2.188c4.298,0,7.664-1.746,8.647-6.796c0.03-0.15,0.054-0.295,0.076-0.437c0.292-1.867-0.002-3.137-1.012-4.288L19.148,1.809L19.148,1.809z"
        />
        <path
            fill="#003087"
            d="M9.476,6.123c0.072-0.454,0.463-0.788,0.922-0.788h5.847c0.693,0,1.339,0.045,1.929,0.139c0.323,0.052,0.642,0.123,0.956,0.214c0.356,0.1,0.701,0.238,1.029,0.41c0.293-1.867-0.001-3.137-1.011-4.289c-1.112-1.266-3.12-1.809-5.69-1.809H5.999c-0.525,0-0.972,0.382-1.054,0.901L1.839,20.597c-0.055,0.349,0.183,0.677,0.532,0.732l0.1,0.008h4.606l1.156-7.336L9.476,6.123L9.476,6.123z"
        />
        <path
            fill="#009CDE"
            d="M20.16,6.097c-0.023,0.146-0.048,0.292-0.076,0.437c-0.983,5.05-4.349,6.797-8.647,6.797H9.247c-0.524,0-0.97,0.383-1.05,0.901l-1.121,7.105l-0.319,2.015c-0.048,0.306,0.16,0.593,0.466,0.641L7.311,24h3.882c0.459,0,0.85-0.334,0.922-0.788l0.038-0.198l0.732-4.636l0.046-0.256c0.072-0.454,0.463-0.788,0.923-0.788h0.581c3.76,0,6.704-1.527,7.564-5.946c0.359-1.845,0.173-3.388-0.776-4.47C20.921,6.581,20.561,6.304,20.16,6.097L20.16,6.097z"
        />
        <path
            fill="#012169"
            d="M19.13,5.688c-0.15-0.045-0.305-0.085-0.464-0.12c-0.16-0.035-0.324-0.066-0.493-0.093c-0.591-0.096-1.236-0.142-1.929-0.142h-5.847c-0.46,0-0.852,0.335-0.922,0.789l-1.243,7.88l-0.036,0.229c0.08-0.518,0.526-0.9,1.05-0.901h2.189c4.299,0,7.664-1.746,8.647-6.797c0.029-0.149,0.054-0.294,0.076-0.437c-0.26-0.136-0.53-0.25-0.808-0.341L19.13,5.688L19.13,5.688L19.13,5.688z"
        />
        <path
            fill="#002A76"
            d="M2.064,21.192c0.085,0.071,0.19,0.12,0.308,0.138l0.1,0.008h4.604l0-0.001H2.471l-0.1-0.008C2.254,21.311,2.15,21.262,2.064,21.192L2.064,21.192z M9.476,6.123l-1.243,7.879L7.22,20.423l0.976-6.191c0.08-0.518,0.526-0.9,1.05-0.901h2.189c0.067,0,0.134,0,0.201-0.001c-0.067,0.001-0.134,0.001-0.201,0.001H9.247c-0.524,0-0.97,0.383-1.05,0.901l0.036-0.229L9.476,6.123L9.476,6.123z M12,0H6c-0.526,0-0.973,0.382-1.056,0.901L3.578,9.569l1.367-8.668c0.082-0.518,0.529-0.9,1.054-0.901L12,0L12,0L12,0z"
        />
        <path
            fill="#002A76"
            d="M12,0.001H5.999c-0.525,0-0.972,0.382-1.054,0.901L3.578,9.569L1.839,20.597c-0.037,0.232,0.056,0.455,0.226,0.595l0,0c0.085,0.07,0.189,0.119,0.306,0.137l0.1,0.008h4.606v-0.001l0.144-0.914l1.012-6.421l1.243-7.879c0.07-0.454,0.462-0.79,0.922-0.789H12V0.001L12,0.001z"
        />
        <path
            fill="#0088C1"
            d="M12,13.321c-0.12,0.005-0.242,0.008-0.364,0.009c-0.067,0.001-0.134,0.001-0.201,0.001H9.247c-0.524,0-0.97,0.383-1.05,0.901L7.22,20.423l-0.144,0.914l0,0.001l0,0.001l-0.319,2.014c-0.048,0.306,0.16,0.593,0.466,0.641L7.311,24h3.882c0.341,0,0.644-0.184,0.807-0.465V13.321L12,13.321z"
        />
        <path
            fill="#011D5B"
            d="M12,5.334h-1.603c-0.46,0-0.852,0.335-0.922,0.789l0,0l-1.243,7.88l-0.036,0.229c0.08-0.518,0.526-0.9,1.05-0.901h2.189c0.067,0,0.134,0,0.201-0.001c0.122-0.002,0.243-0.005,0.364-0.009V5.334L12,5.334z"
        />
    </svg>
);

const print = (
    <svg fill="currentColor" className="bi bi-printer-fill" viewBox="0 0 24 24">
        <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
        <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
    </svg>
);

const paytrail = (
    <svg viewBox="0 0 128 128" fill="#E42E87">
        <path d="M128 0H0V128H128V0Z" fill="#E42E87" />
        <path
            d="M32.7111 21.2148C35.6741 21.2148 38.0444 18.9037 38.0444 16C38.0444 13.0963 35.6741 10.7852 32.7111 10.7852C29.7481 10.7852 27.3778 13.0963 27.3778 16C27.3778 18.9037 29.7481 21.2148 32.7111 21.2148Z"
            fill="white"
        />
        <path
            d="M95.6444 21.3333C98.6074 21.3333 100.978 18.963 100.978 16C100.978 13.037 98.6074 10.6667 95.6444 10.6667C92.6815 10.6667 90.3111 13.037 90.3111 16C90.3111 18.963 92.7407 21.3333 95.6444 21.3333Z"
            fill="white"
        />
        <path
            d="M32.5926 16.3556C32.5926 33.7185 46.6963 47.8222 64.0593 47.8222C81.4222 47.8222 95.5259 33.7185 95.5259 16.3556"
            stroke="white"
            stroke-width="6"
        />
        <path
            d="M108.326 99.0222V96.8296V81.0074H105.896V77.9259H111.644V95.9407H114.074V99.0222H108.326V99.0222ZM101.096 99.0222L101.037 97.7185V86.8148H98.6667V83.7333H104.356V95.8815H106.667V98.963H101.096V99.0222ZM103.763 81.1259C103.348 81.5407 102.815 81.7185 102.341 81.7185C101.867 81.7185 101.333 81.5407 100.919 81.1259C100.504 80.7111 100.326 80.1778 100.326 79.7037C100.326 79.1111 100.504 78.637 100.919 78.2222C101.333 77.8074 101.867 77.6296 102.341 77.6296C102.815 77.6296 103.348 77.8074 103.763 78.2222C104.178 78.637 104.356 79.1704 104.356 79.6444C104.356 80.237 104.178 80.7111 103.763 81.1259ZM93.8074 92.9778C93.3926 92.7407 93.037 92.6222 92.6222 92.4444C92.0889 92.2667 91.5556 92.1481 90.963 92.1481C90.4296 92.1481 90.0148 92.2074 89.6593 92.3259C89.3037 92.4444 89.0074 92.6222 88.8296 92.8C88.3556 93.2148 88.1185 93.7481 88.1185 94.3407C88.1185 94.8148 88.2963 95.2296 88.6519 95.6444C88.8296 95.8222 89.0074 95.9407 89.3037 96.0593C89.5407 96.1778 89.837 96.1778 90.2519 96.1778C90.9037 96.1778 91.5556 96 92.2667 95.6444C92.8593 95.3481 93.3926 94.9333 93.8667 94.5185V92.9778H93.8074ZM93.8074 99.0222V98.0148C93.2148 98.3704 92.563 98.6667 91.9111 98.9037C91.2593 99.1407 90.5482 99.2593 89.837 99.2593C88.3556 99.2593 87.1704 98.7852 86.2222 97.837C85.2741 96.8889 84.8 95.763 84.8 94.4C84.8 92.9185 85.3926 91.6741 86.5185 90.7259C87.0519 90.2519 87.7037 89.8963 88.4148 89.6593C89.1259 89.4222 89.8963 89.3037 90.7852 89.3037C91.437 89.3037 92.1482 89.4222 92.9185 89.6C93.0963 89.6593 93.2148 89.6593 93.3926 89.7185C93.5704 89.7778 93.7482 89.837 93.9259 89.8963V88.1185C93.9259 87.763 93.8667 87.4667 93.7482 87.2296C93.6296 86.9926 93.5111 86.8741 93.3333 86.7556C93.0963 86.5778 92.8 86.4593 92.5037 86.4C92.1482 86.3407 91.7333 86.2815 91.2593 86.2815C91.0222 86.2815 90.7259 86.3407 90.4296 86.4C90.1333 86.4593 89.7778 86.5778 89.4222 86.637C89.0667 86.7556 88.7704 86.8741 88.4741 86.9333C88.1778 87.0518 87.9407 87.1111 87.7037 87.2296L86.6963 84.6815C87.3482 84.4444 87.9407 84.2074 88.4148 84.0296C88.8889 83.8519 89.363 83.7333 89.8963 83.6148C90.4296 83.4963 90.9037 83.437 91.3185 83.437C92.2074 83.437 92.9778 83.5556 93.6889 83.7333C94.4 83.9111 95.0519 84.2074 95.5852 84.563C96.1778 84.9778 96.5926 85.5111 96.8296 86.1037C97.0667 86.6963 97.2445 87.4074 97.2445 88.1778V96H99.4963V99.0815H93.8074V99.0222ZM83.6741 86.8148C82.7852 86.8148 82.0148 86.9333 81.4222 87.1111C80.8296 87.3481 80.3556 87.5852 80 87.8815C79.6444 88.1778 79.4074 88.5333 79.2296 88.9482C79.0519 89.363 78.9333 89.9556 78.9333 90.7852V95.8815H81.7185V98.963H75.6741V96.7704V86.8148H73.1259V83.7333H78.9926V85.3333C79.0519 85.2741 79.2296 85.2148 79.5259 84.9778C79.8222 84.7407 80.0593 84.6222 80.2963 84.5037C80.9481 84.2074 81.4815 83.9704 82.0148 83.8519C82.5481 83.7333 83.1407 83.6741 83.7926 83.7333H85.2148V86.6963H83.6741V86.8148ZM68.9778 99.3185C68.4444 99.3185 67.9704 99.2593 67.5556 99.0815C67.1407 98.963 66.7259 98.7259 66.4296 98.3704C66.1333 98.0741 65.8963 97.6593 65.7778 97.2444C65.6593 96.8296 65.6 96.3556 65.6 95.8815V86.8148H63.2296V83.7333H65.6V80.7704L68.9185 80.7111V83.7926H71.763V86.8741H68.9185V95.6444C68.9185 95.9407 68.9185 96.1185 68.9778 96.237H69.0963L71.7037 95.8222V98.963L68.9778 99.3185ZM59.2593 86.8741L52.3852 105.067H49.1852L51.7926 97.7778L47.3481 86.8741H44.8V83.7926H49.5407L50.2519 85.6296L53.4519 93.5111L55.9407 86.8741H54.2222V83.7926H61.6296V86.8741H59.2593ZM39.7037 92.9778C39.2889 92.7407 38.9333 92.6222 38.5185 92.4444C37.9852 92.2667 37.4519 92.1481 36.8593 92.1481C36.3259 92.1481 35.9111 92.2074 35.5556 92.3259C35.2 92.4444 34.9037 92.6222 34.7259 92.8C34.2519 93.2148 34.0148 93.7481 34.0148 94.3407C34.0148 94.8148 34.1926 95.2296 34.5482 95.6444C34.7259 95.8222 34.9037 95.9407 35.2 96.0593C35.437 96.1778 35.7333 96.1778 36.1481 96.1778C36.8 96.1778 37.4519 96 38.163 95.6444C38.7556 95.3481 39.2889 94.9333 39.763 94.5185V92.9778H39.7037ZM39.7037 99.0222V98.0148C39.1111 98.3704 38.4593 98.6667 37.8074 98.9037C37.1556 99.1407 36.4444 99.2593 35.7333 99.2593C34.2519 99.2593 33.0667 98.7852 32.1185 97.837C31.1704 96.8889 30.6963 95.763 30.6963 94.4C30.6963 92.9185 31.2889 91.6741 32.4148 90.7259C32.9481 90.2519 33.6 89.8963 34.3111 89.6593C35.0222 89.4222 35.7926 89.3037 36.6815 89.3037C37.3333 89.3037 38.0444 89.4222 38.8148 89.6C38.9926 89.6593 39.1111 89.6593 39.2889 89.7185C39.4667 89.7778 39.6444 89.837 39.8222 89.8963V88.1185C39.8222 87.763 39.763 87.4667 39.6444 87.2296C39.5259 86.9926 39.4074 86.8741 39.2296 86.7556C38.9926 86.5778 38.6963 86.4593 38.4 86.4C38.0444 86.3407 37.6296 86.2815 37.1556 86.2815C36.9185 86.2815 36.6222 86.3407 36.3259 86.4C36.0296 86.4593 35.6741 86.5778 35.3185 86.637C34.963 86.7556 34.6667 86.8741 34.3704 86.9333C34.0741 87.0518 33.837 87.1111 33.6 87.2296L32.5926 84.6815C33.2444 84.4444 33.837 84.2074 34.3111 84.0296C34.7852 83.8519 35.2593 83.7333 35.7926 83.6148C36.3259 83.4963 36.8 83.437 37.2148 83.437C38.1037 83.437 38.8741 83.5556 39.5852 83.7333C40.2963 83.9111 40.9481 84.2074 41.4815 84.563C42.0741 84.9778 42.4889 85.5111 42.7259 86.1037C42.963 86.6963 43.1407 87.4074 43.1407 88.1778V96H45.3926V99.0815H39.7037V99.0222ZM27.0222 82.9037C26.8444 82.4296 26.6074 82.1333 26.3704 81.837C26.0741 81.6 25.6593 81.363 25.1259 81.1852C24.5926 81.0074 23.8815 80.9482 23.0519 80.9482H20.1481V87.9407H23.1111C23.8815 87.9407 24.5333 87.8815 25.0667 87.7037C25.6 87.5259 26.0148 87.3481 26.3704 87.0518C26.6667 86.8148 26.9037 86.4593 27.0815 86.1037C27.2593 85.6889 27.3185 85.2148 27.3185 84.6222C27.3185 83.9111 27.2 83.3185 27.0222 82.9037ZM30.2222 87.1704C29.9259 88 29.3926 88.7111 28.7407 89.3037C28.0889 89.8963 27.3185 90.3704 26.4889 90.6667C25.6593 90.963 24.7111 91.0815 23.6444 91.0815H20.1481V96.8296V99.0222H14.163V95.9407H16.7111V81.0074H14.163V77.9259H23.3482C24.4148 77.9259 25.4222 78.0444 26.3111 78.3407C27.2 78.637 28.0296 79.0518 28.6815 79.6444C29.3926 80.237 29.8667 80.9481 30.163 81.7778C30.4593 82.6074 30.637 83.4963 30.637 84.5037C30.6963 85.4519 30.5778 86.3407 30.2222 87.1704Z"
            fill="white"
        />
        <path
            d="M68.8593 108.089C70.8148 108.089 72.237 109.333 72.237 111.348V113.067C72.237 115.437 70.7556 116.444 68.6815 116.444C67.6741 116.444 66.4889 116.207 65.6 115.911C65.4815 115.852 65.4222 115.793 65.4222 115.674V105.481C65.4222 105.304 65.4815 105.244 65.6593 105.244H66.963C67.1407 105.244 67.2 105.304 67.2 105.481V108.444C67.6741 108.207 68.2667 108.089 68.8593 108.089ZM70.4 113.067V111.348C70.4 110.163 69.7481 109.689 68.6815 109.689C68.0889 109.689 67.6148 109.867 67.2 110.104V114.667C67.5556 114.844 68.1481 114.904 68.6222 114.904C69.7481 114.844 70.4 114.37 70.4 113.067Z"
            fill="white"
        />
        <path
            d="M78.7556 108.504C78.7556 108.385 78.8148 108.267 78.9926 108.267H80.2963C80.4741 108.267 80.5333 108.326 80.5333 108.504V115.733C80.5333 118.104 79.4667 119.348 77.0963 119.348C75.7926 119.348 74.9037 119.052 74.0741 118.4C73.9556 118.281 73.9556 118.222 74.0148 118.104L74.6667 117.156C74.7259 117.037 74.8444 116.978 74.963 117.096C75.5556 117.511 76.2074 117.807 77.037 117.807C78.1037 117.807 78.7556 117.333 78.6963 115.793C78.2222 115.97 77.6296 116.089 77.037 116.089C75.437 116.089 73.7185 115.081 73.7185 112.948V108.563C73.7185 108.444 73.837 108.326 73.9556 108.326H75.3185C75.437 108.326 75.5556 108.385 75.5556 108.563V112.889C75.5556 114.074 76.3852 114.489 77.3333 114.489C77.8667 114.489 78.4 114.37 78.6963 114.193V108.504H78.7556Z"
            fill="white"
        />
        <path
            d="M86.0444 116.267C85.8667 116.267 85.8074 116.207 85.8074 116.03V108.978C85.8074 108.859 85.8667 108.741 85.9852 108.681C86.8741 108.326 87.9407 108.089 89.0667 108.089C91.2 108.089 92.6222 109.096 92.6222 111.526V116.03C92.6222 116.207 92.563 116.267 92.3852 116.267H91.0222C90.9037 116.267 90.7852 116.207 90.7852 116.03V111.585C90.7852 110.163 90.1333 109.689 89.0074 109.689C88.4741 109.689 87.9407 109.748 87.5852 109.867V116.03C87.5852 116.207 87.5259 116.267 87.3481 116.267H86.0444V116.267Z"
            fill="white"
        />
        <path
            d="M100.978 112.83C100.978 112.948 100.919 113.067 100.741 113.067H96.0593V113.481C96.0593 114.43 96.7111 114.904 97.7185 114.904C98.6667 114.904 99.3185 114.607 99.9111 114.193C100.03 114.133 100.148 114.133 100.207 114.252L100.859 115.081C100.978 115.2 100.919 115.319 100.8 115.378C99.9704 116.03 98.963 116.444 97.6593 116.444C95.9407 116.444 94.2815 115.496 94.2815 113.422V111.23C94.2815 108.978 96 108.089 97.6593 108.089C99.3185 108.089 100.978 108.978 100.978 111.23V112.83V112.83ZM97.6 109.689C96.7111 109.689 96 110.104 96 111.289V111.704H99.2V111.289C99.2 110.104 98.4889 109.689 97.6 109.689Z"
            fill="white"
        />
        <path
            d="M105.541 114.785C105.659 114.785 105.956 114.785 106.193 114.726C106.37 114.726 106.43 114.785 106.43 114.963V116.148C106.43 116.267 106.37 116.385 106.193 116.385C105.956 116.385 105.6 116.444 105.363 116.444C103.763 116.444 102.519 115.615 102.519 113.6V106.548C102.519 106.43 102.578 106.311 102.756 106.311H103.941C104.059 106.311 104.178 106.37 104.178 106.489L104.296 108.326H105.956C106.074 108.326 106.193 108.385 106.193 108.563V109.689C106.193 109.807 106.074 109.926 105.956 109.926H104.296V113.481C104.296 114.311 104.711 114.785 105.541 114.785Z"
            fill="white"
        />
        <path
            d="M110.459 116.444C109.393 116.444 108.326 116.148 107.319 115.437C107.2 115.378 107.2 115.259 107.259 115.141L107.852 114.133C107.911 114.015 108.03 113.956 108.148 114.074C108.859 114.607 109.689 114.844 110.459 114.844C111.289 114.844 111.881 114.548 111.881 113.956C111.881 113.363 111.17 113.185 110.459 113.067C109.274 112.83 107.319 112.356 107.319 110.519C107.319 108.8 108.919 108.089 110.578 108.089C111.467 108.089 112.356 108.326 113.244 108.8C113.363 108.859 113.422 108.978 113.304 109.096L112.711 110.104C112.652 110.222 112.533 110.222 112.415 110.163C111.822 109.867 111.17 109.63 110.459 109.63C109.57 109.63 109.037 109.985 109.037 110.459C109.037 111.111 109.748 111.23 110.756 111.467C112 111.704 113.6 112.119 113.6 113.896C113.719 115.615 112.296 116.444 110.459 116.444Z"
            fill="white"
        />
    </svg>
);

export const iconsData = {
    alert,
    arrowLeft,
    cart,
    chat,
    check,
    checkCircle,
    checkout,
    edit,
    gear,
    info,
    klarna,
    loading,
    login,
    logout,
    marketplace,
    minus,
    orders,
    paypal,
    paytrail,
    plus,
    print,
    profile,
    remove,
    signup,
    trash,
    truck,
    userBadge,
    userLines,
};
