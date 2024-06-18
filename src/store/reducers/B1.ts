const initialUser: any = {
  id: 1,
  userName: "Phạm Trung Hiếu",
  gender: "Nam",
  dateBirth: "25/07/2004",
  address: "Đắk Lắk",
};

const reducerUser = (state = initialUser, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducerUser;
