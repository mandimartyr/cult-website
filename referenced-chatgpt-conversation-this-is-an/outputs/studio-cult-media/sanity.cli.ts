import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'wmzu9qlt',
    dataset: 'production'
  },
  typegen: {enabled: true, path: '../cult/lib/sanity/**/*.ts', schema: 'schema.json', generates: '../cult/lib/sanity/sanity.types.ts', overloadClientMethods: true},
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
