export const UPDATE_STEP = 'UPDATE_STEP';
export const RESET_STEP = 'RESET_STEP';

export interface UpdateStep {
    type: typeof UPDATE_STEP;
    step: number;
}

export interface ResetStep {
    type: typeof RESET_STEP;
    step: number;
}

export type StepActionTypes = UpdateStep | ResetStep;
