const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.watchFolders = [__dirname];
config.resolver.useWatchman = false;
config.watcher = {
  watchman: { deferStates: [] },
  healthCheck: { enabled: false },
  additionalExts: ['ts', 'tsx'],
};

module.exports = config;