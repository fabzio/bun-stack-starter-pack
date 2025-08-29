import { t } from 'elysia'

export namespace UserModel {
  export const userBody = t.Object({
    name: t.String(),
    password: t.String(),
  })

  export type UserBody = typeof userBody.static

  export const userResponse = t.Object({
    id: t.Number(),
    name: t.String(),
    passwordHash: t.String(),
    createdAt: t.Date(),
  })
}
