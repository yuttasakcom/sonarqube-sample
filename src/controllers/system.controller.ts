import { route, HttpMethod } from '@spksoft/koa-decorator'
import { Context } from 'koa'

@route('/system')
class System {
  @route('/health')
  async health(ctx: Context) {
    ctx.body = 'OK'
  }
}
