const HOST_NAME = 'http://localhost:5033';

const API_PATH = {
  SignIn:'/user/signin-admin',
  SignOut: '/user/signout',
  TokenLoginAdmin: '/user/token-login-admin',
  CreateCategory: '/category/create-category',
  GetCategories: '/category',
  Product: '/product',
  Order: '/order',
  User: '/user',
  GetCategoryPath: '/category/get-cate-path',
  OrderAllUsers: '/order/get-orders-all-users',
  OrderById: '/order/get-order',
};

const API = (key) => {
  return `${HOST_NAME}${API_PATH[key]}`;
}


export default API;