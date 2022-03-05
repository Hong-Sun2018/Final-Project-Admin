const HOST_NAME = 'https://api.h0n9.com';

const API_PATH = {
  SignIn:'/user/signin-admin',
  TokenLoginAdmin: '/user/token-login-admin',
  CreateCategory: '/category/create-category',
  GetCategories: '/category',
  Product: '/product',
  GetCategoryPath: '/category/get-cate-path'

};

const API = (key) => {
  return `${HOST_NAME}${API_PATH[key]}`;
}


export default API;