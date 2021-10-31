import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPostOffice, IStore } from '../../../@types';
import { storeList } from '../../data/cart';
import { addPostOffice } from '../../store/actions/cartActions';
import { AppState } from '../../store/store';
import RadioButton from '../RadioButton/RadioButton';

interface IPostOfficeProps {
    showStoreList?: boolean;
}

const PostOfficeList: FC<IPostOfficeProps> = ({ showStoreList }) => {
    const dispatch = useDispatch();
    const postOffices = useSelector((state: AppState) => state.postOffices);
    const cart = useSelector((state: AppState) => state.cart);
    const addPostOfficeToCart = (event: any, postOffice: IPostOffice) => {
        event.preventDefault();
        dispatch(addPostOffice(postOffice));
    };

    const addPickupStoreToCart = (event: any, pickupStore: IStore) => {
        event.preventDefault();
        dispatch(addPickupStoreToCart(event, pickupStore));
    };
    return (
        <fieldset>
            <legend>Noutopisteet</legend>
            {showStoreList
                ? storeList.map((store: IStore) => {
                      return (
                          <RadioButton
                              key={store.quantity}
                              handleChange={(event: any) =>
                                  addPickupStoreToCart(event, store)
                              }
                              formField={{
                                  required: true,
                                  disabled: false,
                                  id: store.location,
                                  label: store.location,
                                  name: 'pickupStore',
                                  type: 'radio',
                              }}
                              checked={true}
                          />
                      );
                  })
                : postOffices.map((postOffice: IPostOffice) => {
                      return (
                          <RadioButton
                              key={postOffice.id}
                              handleChange={(event: any) =>
                                  addPostOfficeToCart(event, postOffice)
                              }
                              formField={{
                                  required: true,
                                  disabled: false,
                                  id: postOffice.id,
                                  label: postOffice.name,
                                  name: 'postOffice',
                                  type: 'radio',
                              }}
                              secondaryText={`${postOffice.address}, ${postOffice.zipcode} ${postOffice.city}`}
                              checked={postOffice.id === cart.postOffice.id}
                          />
                      );
                  })}
        </fieldset>
    );
};

export default PostOfficeList;
