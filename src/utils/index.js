export const setUserInfo = (userInfo) => {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

export const getUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || null);
  return userInfo;
};

export const isLogin = () => {
  return !!getUserInfo();
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};
