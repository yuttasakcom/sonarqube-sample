import axios from 'axios'
import { route, HttpMethod } from '@spksoft/koa-decorator'
import { Context } from 'koa'

@route('/greeting')
class Greeting {
  @route('hello')
  async hello(ctx: Context) {
    // Code Smell: Remove this useless assignment to local variable "xxxxxxx"
    const xxxxxxx = (a: number, b: number): number => a + b

    ctx.body = 'ok'
  }
}
