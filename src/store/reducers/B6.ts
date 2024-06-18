const initialChangeState: any = "Rikkei Academy";

const reducerChangeState = (state = initialChangeState, action: any) => {
  switch (action.type) {
    case "CHANGE":
      return "ReikkeiSoft";

    default:
      return state;
  }
};

export default reducerChangeState;
