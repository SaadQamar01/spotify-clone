import forge from 'mappersmith';
import {apiBaseUrl} from '../../../constants/api-baseUrl';
import {ServerErrorMiddleware} from '../../middleware/server-error-middleware';
import {ServerResponseMiddleware} from '../../middleware/server-response-middleware';
import {AccessTokenMiddleware} from '../../middleware/access-token-middleware';
import EncodeJson from 'mappersmith/middleware/encode-json';

const ServerErrors = ServerErrorMiddleware();
const ServerResponse = ServerResponseMiddleware();
const AccesTokenMiddleware = AccessTokenMiddleware();
const client = forge({
  host: apiBaseUrl,
  middleware: [ServerErrors, ServerResponse, AccesTokenMiddleware, EncodeJson],
  resources: {
    Core: {
      countries: {
        path: '/countries',
        method: 'get',
      },
      state: {
        path: `/states/{country}`,
        method: 'get',
      },
      city: {
        path: `/cities/{state}`,
        method: 'get',
      },
    },
  },
});

export const countriesList = () => {
  return client.Core.countries();
};
export const state = country => {
  return client.Core.state({country});
};

export const city = state => {
  return client.Core.city({state});
};
