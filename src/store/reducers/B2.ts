const initialUser = [
  {
    id: 1,
    fullName: "Nguyễn Văn A",
    gender: "Nam",
    dateBirth: "20/11/2023",
    address: "Thanh Xuân, Hà Nội",
  },
  {
    id: 2,
    fullName: "Nguyễn Văn B",
    gender: "Nữ",
    dateBirth: "20/11/2023",
    address: "Cầu Giấy, Hà Nội",
  },
];

const reducerUsers = (state = initialUser, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducerUsers;
