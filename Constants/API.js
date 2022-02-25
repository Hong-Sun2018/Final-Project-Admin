const HOST_NAME = 'https://api.h0n9.com';

const API_PATH = {
  SignIn:'/user/signin-admin',
  CreateCategory: '/category/create-category'
};

const GetUrl = (key) => {
  return `${HOST_NAME}${API_PATH[key]}`;
}

export default GetUrl;