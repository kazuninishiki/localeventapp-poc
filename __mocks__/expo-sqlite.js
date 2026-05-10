// sql mocks, expo-sqlite needs native modules, can't run in Jest.

module.exports = {
  openDatabaseSync: () => ({
    execSync: () => {},
    runSync: () => {},
    getAllSync: () => []
  })
}