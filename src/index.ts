import { logger } from '@4lch4/logger'
import { Commander, ConfigUtil } from '@4lch4/lt-commander/dist/index.js'
import fs from 'fs-extra'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { NewProjectCmd, InitCmd } from './cmd/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

// async function init() {
//   const pkgJson = await fs.readJSON(join(__dirname, '..', 'package.json'))

//   const cfgUtil = new ConfigUtil(process.env.APP_NAME || pkgJson.displayName)

//   cfgUtil.clear()

//   logger.success(await cfgUtil.all())

//   cfgUtil.set('name', pkgJson.name)
//   cfgUtil.set('version', pkgJson.version)
//   cfgUtil.set('displayName', pkgJson.displayName)
//   cfgUtil.set('description', pkgJson.description)

//   return cfgUtil.all()

//   // logger.success(await cfgUtil.all())

//   // if (cfg) {
//   //   logger.success('Config properties found!')
//   //   logger.success(JSON.stringify(cfg, null, 2))
//   // } else {
//   //   logger.warn('No config properties found!')
//   // }
// }

async function initConfig(): Promise<ConfigUtil> {
  const pkgJson = await fs.readJSON(join(__dirname, '..', 'package.json'))

  const cfgUtil = new ConfigUtil(process.env.APP_NAME || pkgJson.displayName)

  cfgUtil.clear()

  cfgUtil.set('name', pkgJson.name)
  cfgUtil.set('version', pkgJson.version)
  cfgUtil.set('displayName', pkgJson.displayName)
  cfgUtil.set('description', pkgJson.description)

  return cfgUtil
}

async function init() {
  const cfgUtil = await initConfig()
  const program = Commander.program
    .name(cfgUtil.get('displayName'))
    .description(cfgUtil.get('description'))
    .version(cfgUtil.get('version'))

  // const newProjectCmd = await new NewProjectCmd().build()
  program.addCommand(await new NewProjectCmd().build())
  program.addCommand(await new InitCmd().build())

  program.parse()
}

init()
  .then(res => {
    logger.success('Execution successfully complete!')
    logger.success(JSON.stringify(res, null, 2))
  })
  .catch(err => {
    logger.error('Error received!')
    logger.error(err)
  })

// program.version(cfgUtil.)
