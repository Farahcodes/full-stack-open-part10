import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
// hooks
import useAuthStorage from './useAuthStorage';

const AUTHENTICATE = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();
  const signIn = async ({ username, password }) => {
    return mutate({
      variables: {
        credentials: {
          username,
          password
        }
      }
    });
  };

  return [signIn, result];
};

export default useSignIn;
