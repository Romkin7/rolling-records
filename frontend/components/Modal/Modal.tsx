import React, { FC } from 'react';
import Modal from 'react-awesome-modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateModal } from '../../store/actions/modalActions';
import { AppState } from '../../store/store';
import Coupon from '../Coupon/Coupon';

const ModalC: FC = () => {
    const dispatch = useDispatch();
    const modalOpen = useSelector((state: AppState) => state.modalOpen);

    function closeModal() {
        dispatch(updateModal(false));
    }

    return (
        <Modal
            visible={modalOpen}
            width="500"
            height="300"
            effect="fadeInUp"
            onClickAway={() => closeModal()}
        >
            <div>
                <Coupon />
                <a href="javascript:void(0);" onClick={() => closeModal()}>
                    Close
                </a>
            </div>
        </Modal>
    );
};

export default ModalC;
