export const UPDATE_TOGGLE = 'UPDATE_TOGGLE';

export interface UpdateToggle {
    type: typeof UPDATE_TOGGLE;
    toggle: boolean;
}

export type ToggleActionTypes = UpdateToggle;
