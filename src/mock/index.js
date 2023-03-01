import Mock from "mockjs";

let res = {
  code: 200,
  msg: "OK",
  data: {
    role: "admin",
  },
};
Mock.mock("https://your-api.com/user/role", "get", () => {
  return res;
});
