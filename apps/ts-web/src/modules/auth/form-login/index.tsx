import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@workspace/ui/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@workspace/ui/components/form'
import { Input } from '@workspace/ui/components/input'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useLogin } from '../hooks/useLogin'

export default function FormLogin() {
  const { mutate, isPending } = useLogin()
  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
  })

  const handleSubmit = form.handleSubmit((data) => {
    mutate(data, {
      onSuccess: (data) => {
        alert(JSON.stringify(data, null, 2))
      },
    })
  })
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Formulario de login</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-2" type="submit" disabled={isPending}>
              {isPending ? <Loader2 className="animate-spin w-2" /> : 'Enviar'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

const schema = z.object({
  name: z.string().min(2).max(100),
  password: z.string().min(6).max(100),
})
type FormSchema = z.infer<typeof schema>
