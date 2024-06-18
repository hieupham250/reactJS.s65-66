import { combineReducers, createStore } from "redux";
import reducerUser from "./reducers/B1";
import reducerUsers from "./reducers/B2";
import reducerProducts from "./reducers/B3";
import reducerCount from "./reducers/B4";
import reducerRandom from "./reducers/B5";
import reducerChangeState from "./reducers/B6";
import reducerTheme from "./reducers/B7";

const rootReducer = combineReducers({
  reducerUser,
  reducerUsers,
  reducerProducts,
  reducerCount,
  reducerRandom,
  reducerChangeState,
  reducerTheme,
});
const store = createStore(rootReducer);
export default store;
