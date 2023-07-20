// Enums
import { EnvName } from '@enums/environment.enum';

// Packages
import packageInfo from '../../package.json';

const baseUrl = 'https://free-to-play-games-database.p.rapidapi.com/api';

export const environment = {
  production      : true,
  version         : packageInfo.version,
  appName         : 'GameCatalog',
  envName         : EnvName.PROD,
  defaultLanguage : 'en',
  apiBaseUrl      : baseUrl,
  apiHeaderKey    : 'b56a522c71msh28a11faa5289d4ep182042jsn91a11f1ed2cc',
  apiHeaderHost   : 'free-to-play-games-database.p.rapidapi.com'
};
