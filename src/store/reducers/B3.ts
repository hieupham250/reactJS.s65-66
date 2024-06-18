const initialProducts = [
  {
    id: 1,
    product_name: "Cam sành",
    price: 20000,
    quantity: 10,
  },
  {
    id: 2,
    product_name: "Bưởi ba roi",
    price: 50000,
    quantity: 15,
  },
];

const reducerProducts = (state = initialProducts, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducerProducts;
