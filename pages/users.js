import PageContainer from '../Components/PageContainer';
import UserList from '../Views/UserView/UserList';

const UsersPage = () => {
  return (
    <PageContainer pageTitle={'Users'}>
      <UserList />
    </PageContainer>
  );
}

export default UsersPage;