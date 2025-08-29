import { useMutation } from '@tanstack/react-query'
import rpc from '@/lib/rpc'

export const useLogin = () => {
  return useMutation({
    mutationFn: rpc.user.post,
  })
}
