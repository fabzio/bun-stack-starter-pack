import { useQuery } from '@tanstack/react-query'
import { QueryKeys } from '@/const/query-keys'
import rpc from '@/lib/rpc'

export const useGetUsers = () => {
  return useQuery({
    queryKey: [QueryKeys.GET_USERS],
    queryFn: () => rpc.user.get(),
    enabled: false,
  })
}
