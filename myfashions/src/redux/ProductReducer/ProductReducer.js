
import { ADDDATA } from "./ProductAction";

const init = {
    productData: [],
    totalPage:""
};

export const ProductReducer = (store = init, { type, payload }) => {
    switch (type) {
      case ADDDATA:return {...store,productData:payload.product,totalPage:payload.totalPage}
    default:
      return store;
  }
};