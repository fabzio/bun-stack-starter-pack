import Elysia, { t } from 'elysia'
import { UserModel } from './model'
import { UserService } from './service'

const tag = 'User'
const userModule = new Elysia({
  prefix: '/user',
})
  .get('', async () => await UserService.getAllUsers(), {
    response: {
      200: t.Array(UserModel.userResponse),
    },
    tags: [tag],
  })
  .post(
    '',
    async ({ body }) => {
      const { name, password } = body
      const hashedPassword = await Bun.password.hash(password)
      const response = await UserService.createUser({
        name,
        password: hashedPassword,
      })
      return response
    },
    {
      tags: [tag],
      body: UserModel.userBody,
      response: {
        200: UserModel.userResponse,
      },
    },
  )

export default userModule
