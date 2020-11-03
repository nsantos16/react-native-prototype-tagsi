import humps from 'humps';
import { updateSession } from 'actions/userActions';

const ACCESS_TOKEN = 'Authorization';
const UID = 'uid';
const CLIENT = 'client';

const UNAUTHORIZED = 401;

export default (store, client) => {
  client.interceptors.request.use(config => {
    const { info } = store.getState().session;
    const { data, headers } = config;
    if (info) {
      const { token } = info;
      config.headers = {
        ...headers,
        [ACCESS_TOKEN]: `Bearer ${token}`,
      };
    }
    config.data = humps.decamelizeKeys(data);
    return config;
  });

  client.interceptors.response.use(
    async response => {
      const { headers, data } = response;
      const token = headers[ACCESS_TOKEN];
      if (token) {
        const session = {
          token,
          uid: headers[UID],
          client: headers[CLIENT],
        };
        store.dispatch(updateSession(session));
      }
      response.data = humps.camelizeKeys(data);
      return response;
    },
    error => {
      if (error.response && error.response.status === UNAUTHORIZED) {
        // store.dispatch(logout());
      }

      return Promise.reject(error);
    },
  );
};
