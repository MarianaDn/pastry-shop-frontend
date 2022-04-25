import { productItems } from "src/constants";

//action-types
export const ADD_TO_CART = 'ADD_TO_CART';

interface AddToCartItems {
  product: productItems;
  quantityItems: number;
  price: number;
}

//actions
export const addToCart = (payload: AddToCartItems) => ({ type: ADD_TO_CART, payload });

type State = {
  products: productItems[];
  quantityItems: number;
  total: number;
};

//reducer
const initialState: State = {
  products: [],
  quantityItems: 0,
  total: 0,
};

type AddToCartAction = {
  type: string;
  payload: AddToCartItems;
};

export const addToCartReducer = (state = initialState, action: AddToCartAction) => {
  switch (action.type) {
    
    case ADD_TO_CART:
      return {
        ...state,
        products: state.products.concat(action.payload.product),
        quantityItems: state.quantityItems += 1,
        total: state.total += action.payload.price * action.payload.quantityItems
      };
    default:
      return state;
  }
};
