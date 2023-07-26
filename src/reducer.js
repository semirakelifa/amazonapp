export const initialState = {
  basket: [],
  user: null,
};


const reducer = (state, action) => {
 
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      // Logic for adding item for basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      case 'EMPTY_BASKET':
        return {
          ...state,
          basket:[],
        };
      
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
     let newBasket = [...state.basket];
      if (index >= 0) {
        //item exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.id}) as its not in basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;

