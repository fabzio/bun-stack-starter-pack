import { Button } from '@workspace/ui/components/button'
import { Loader } from 'lucide-react'
import { useEffect, useState } from 'react'
import FormLogin from './form-login'
import { useGetUsers } from './hooks/useGetUsers'

export default function Auth() {
  const { isLoading, refetch, data } = useGetUsers()
  const [hasCLicked, setHasClicked] = useState(false)

  useEffect(() => {
    if (data && hasCLicked) {
      setHasClicked(false)
      alert(JSON.stringify(data))
    }
  }, [data, hasCLicked])

  return (
    <div className="h-full w-full grid place-items-center">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <Button
            onClick={() => {
              setHasClicked(true)
              refetch()
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="animate-spin" />
            ) : (
              'Obtener Usuarios'
            )}
          </Button>
        </div>
        <div className="flex-1">
          <FormLogin />
        </div>
      </div>
    </div>
  )
}
