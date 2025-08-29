import { treeifyError, z } from 'zod'

z.config(z.locales.es())
const EnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.string(),
  VALKEY_URL: z.string().optional(),
  APP_TOKEN: z.hash('sha256'),
})

type Config = z.infer<typeof EnvSchema>

let env: Config

try {
  console.info('Env: ', process.env.NODE_ENV)
  env = EnvSchema.parse(process.env)
} catch (e) {
  const error = e as z.ZodError
  console.error('❌ Invalid environment variables:')
  console.dir(
    treeifyError(error),

    {
      depth: null,
      colors: true,
    },
  )
  process.exit(1)
}

export default env
