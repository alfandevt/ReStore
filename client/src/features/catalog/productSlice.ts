import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../app/models/Product';

export interface ProductState {
  product: Product[];
}
const initialState: ProductState = {
  product: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});
