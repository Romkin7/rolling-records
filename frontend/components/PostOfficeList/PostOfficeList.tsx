import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { IPostOffice, IStore } from '../../../@types';
import { storeList } from '../../data/cart';
import { AppState } from '../../store/store';
import RadioButton from '../RadioButton/RadioButton';

interface IPostOfficeProps {
    showStoreList?: boolean;
}

const PostOfficeList: FC<IPostOfficeProps> = ({ showStoreList }) => {
    const postOffices = useSelector((state: AppState) => state.postOffices);
    const [selected, setSelected] = useState<string>(() => null);
    return (
        <fieldset>
            <legend>Noutopisteet</legend>
            {showStoreList
                ? storeList.map((store: IStore) => {
                      return (
                          <RadioButton
                              key={store.quantity}
                              handleChange={() => setSelected(store.location)}
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
                              handleChange={() => setSelected(postOffice.id)}
                              formField={{
                                  required: true,
                                  disabled: false,
                                  id: postOffice.id,
                                  label: postOffice.name,
                                  name: 'postOffice',
                                  type: 'radio',
                              }}
                              secondaryText={`${postOffice.address}, ${postOffice.zipcode} ${postOffice.city}`}
                              checked={postOffice.id === selected}
                          />
                      );
                  })}
        </fieldset>
    );
};

export default PostOfficeList;
