import postgres from '@/db/postgres'
import { userTable } from '@/db/schema'
import type { UserModel } from './model'

export namespace UserService {
  export async function getAllUsers() {
    return await postgres.query.userTable.findMany()
  }
  export async function createUser({ name, password }: UserModel.UserBody) {
    const [user] = await postgres
      .insert(userTable)
      .values({
        name,
        passwordHash: password,
      })
      .returning({
        id: userTable.id,
        name: userTable.name,
        passwordHash: userTable.passwordHash,
        createdAt: userTable.createdAt,
      })
    return user
  }
}
