/** Dispatch action types */
export interface IDispatchProps {
    /** Product actions */
    fetchProductsAction: (query: string) => void;
}
