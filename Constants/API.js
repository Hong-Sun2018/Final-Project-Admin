const HOST_NAME = 'http://api.h0n9.com';

const API_PATH = {
  SignIn:'/user/signin-admin',
};

const GetUrl = (key) => {
  return `${HOST_NAME}${API_PATH[key]}`;
}

export default GetUrl;