const initialTheme: boolean = false;
const reducerTheme = (state = initialTheme, action: any) => {
  switch (action.type) {
    case "TOGGLETTHEME":
      return !state;

    default:
      return state;
  }
};

export default reducerTheme;
