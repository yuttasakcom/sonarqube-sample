import { resolve } from 'path'

import koa from 'koa'
import { load } from '@spksoft/koa-decorator'

const app = new koa()
const router = load(resolve(__dirname, 'controllers'), '.controller.ts')

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)

console.log('Server is running on port 3000')
