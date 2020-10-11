const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
//  config.devServer.hot = false;
//  config.devServer.inline = false;
//  config.devServer.liveReload = false;
  config.devServer.watchOptions.ignored = [/.*/];
//  console.log("------------------------------------ ************* --------------------------------");
//  console.log(config);
  return config;
};
