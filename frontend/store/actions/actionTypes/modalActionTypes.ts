export const UPDATE_MODAL = 'UPDATE_MODAL';

export interface UpdateModal {
    type: typeof UPDATE_MODAL;
    visible: boolean;
}

export type ModalActionTypes = UpdateModal;
