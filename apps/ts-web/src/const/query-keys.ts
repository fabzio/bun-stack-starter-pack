export const QueryKeys = {
  GET_USERS: 'get-users',
} as const

export type QueryKey = (typeof QueryKeys)[keyof typeof QueryKeys]
