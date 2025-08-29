import { swagger } from '@elysiajs/swagger'
import { Elysia, t } from 'elysia'
import userModule from './modules/user'

const app = new Elysia({
  prefix: '/api/v1',
})
  .use(swagger())
  .model({
    user: t.Object({
      name: t.String(),
      password: t.String(),
    }),
  })
  .get('/', () => 'Hello Elysia')
  .use(userModule)

  .listen(8000)
export type App = typeof app

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
)
