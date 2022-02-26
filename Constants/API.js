const HOST_NAME = 'http://localhost:5033';

const API_PATH = {
  SignIn:'/user/signin-admin',
  CreateCategory: '/category/create-category'
};

const GetUrl = (key) => {
  return `${HOST_NAME}${API_PATH[key]}`;
}

export default GetUrl;