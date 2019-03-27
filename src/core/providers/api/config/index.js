const getConfig = () => {
  const config = {
    baseUrl: process.env.REACT_APP_ENVIRONMENT_CONFIG
  };

  return {
    baseURL: config.baseUrl,
    headers: {}
  };
};

export default getConfig;
