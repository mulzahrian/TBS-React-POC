import { createStore } from "redux";

//reducer
const CartReducer = (
    state = {
        cart: [{ id: 1, qty: 2 }],
    },
    action
) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default:
            return state;
    }
};

//store
const store = createStore(CartReducer);
console.log("Initial State:", store.getState());

//subscribe
store.subscribe(() => {
    console.log("Updated State:", store.getState());
});

//dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
store.dispatch(action1);
