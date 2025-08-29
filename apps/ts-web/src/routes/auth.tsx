import { createFileRoute } from '@tanstack/react-router'
import { QueryKeys } from '@/const/query-keys'
import rpc from '@/lib/rpc'
import Auth from '@/modules/auth'

export const Route = createFileRoute('/auth')({
  loader: async ({ context: { queryClient } }) =>
    await queryClient.ensureQueryData({
      queryKey: [QueryKeys.GET_USERS],
      queryFn: () => rpc.user.get(),
    }),
  component: Auth,
})
