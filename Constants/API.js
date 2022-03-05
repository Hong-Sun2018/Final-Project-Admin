const HOST_NAME = 'http://api.h0n9.com';

const API_PATH = {
  SignIn:'/user/signin-admin',
  TokenLoginAdmin: '/user/token-login-admin',
  CreateCategory: '/category/create-category',
  GetCategories: '/category',
  Product: '/product',

};

const API = (key) => {
  return `${HOST_NAME}${API_PATH[key]}`;
}


export default API;