# Bun Stack Starter Pack

Un monorepo moderno centrado en la **mejor experiencia de desarrollo** y **buenas prácticas** con máxima **posibilidad de personalización**. Este stack está diseñado para proporcionar un entorno de desarrollo robusto, rápido, escalable y type-safety 💙.

## 🚀 Características Principales

### 🛠️ Herramientas de Desarrollo

- **[Husky](https://typicode.github.io/husky/)** - Git hooks automáticos para mantener la calidad del código
- **[Commitlint](https://commitlint.js.org/)** - Linter de convenciones de commits siguiendo [Conventional Commits](https://www.conventionalcommits.org/)
- **[Lint-staged](https://github.com/okonet/lint-staged)** - Ejecuta linters automáticamente en archivos staged
- **[Biome](https://biomejs.dev/)** - Linter y formateador ultrarrápido escrito en Rust 🦀
- **[Turborepo](https://turbo.build/repo)** - Administrador de workspaces para monorepos con caché inteligente

### 📦 Stack Tecnológico

- **Runtime**: [Bun](https://bun.sh) - Runtime JavaScript ultrarrápido
- **Monorepo**: [Turborepo](https://turbo.build/repo) con workspaces
- **API**: [Elysia](https://elysiajs.com/) con documentación Swagger automática y su rpc: Eden
- **Frontend**: React + TypeScript + Vite/Next.js
- **Base de datos**: PostgreSQL con [Drizzle ORM](https://orm.drizzle.team/)
- **Estilos**: Tailwind CSS + shadcn/ui

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

1. **[Bun](https://bun.sh)** - Instálalo desde [bun.sh](https://bun.sh)
2. **[Docker](https://docker.com)** - Para la base de datos local

### 🎯 Extensiones de VS Code Recomendadas

Si usas **Visual Studio Code**, este proyecto incluye extensiones recomendadas que mejorarán tu experiencia de desarrollo. VS Code te sugerirá automáticamente instalarlas, o puedes instalarlas manualmente:

- **[Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)** - Linter y formateador integrado
- **[Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)** - Asistente para commits convencionales
- **[Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)** - Errores de TypeScript más legibles
- **[Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)** - Información de versiones de paquetes
- **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)** - Autocompletado para Tailwind
- **[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)** - Herramientas avanzadas de Git
- **[Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)** - Muestra el tamaño de las importaciones
- **[Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)** - Resalta colores en el código

Para instalar todas las extensiones recomendadas de una vez:
1. Abre VS Code en la carpeta del proyecto
2. Presiona `Ctrl+Shift+P` (o `Cmd+Shift+P` en Mac)
3. Busca "Extensions: Show Recommended Extensions"
4. Haz clic en "Install Workspace Recommended Extensions"

## 🚀 Inicio Rápido

### 1. Clonar e Instalar

```bash
git clone <tu-repositorio>
cd bun-stack-starter-pack
bun install
```

### 2. Configuración Automática (Recomendado)

Para la primera configuración, puedes usar nuestro script automatizado:

```bash
bun run setup
```

Este script automáticamente:
- ✅ Instala todas las dependencias
- ✅ Verifica que Docker esté corriendo
- ✅ Inicia la base de datos local
- ✅ Migra el esquema a la base de datos
- ✅ Te prepara para desarrollo

### 3. Configuración Manual

Si prefieres hacerlo paso a paso:

```bash
# 1. Instalar dependencias en la raíz
bun install

# 2. Iniciar entorno de desarrollo
bun dev

# 3. En otra terminal, migrar la base de datos
cd apps/api
bun db:push
```

### 4. ¡Listo para Desarrollar!

Una vez completada la configuración:

- 🌐 Las aplicaciones estarán disponibles en diferentes puertos (revisa la terminal)
- 📚 La documentación de la API estará en: `http://localhost:5173/api/v1/swagger` (o puerto 8000)
- 🔄 Todos los cambios se recargarán automáticamente

## 📁 Estructura del Proyecto

```
bun-stack-starter-pack/
├── apps/
│   ├── api/          # API con Elysia + Drizzle ORM
│   ├── db/           # Configuración de Docker para PostgreSQL
│   ├── docs/         # Documentación con Next.js
│   ├── next-web/     # Aplicación web con Next.js
│   └── ts-web/       # Aplicación web con Vite + React
├── packages/
│   ├── typescript-config/  # Configuraciones de TypeScript compartidas
│   └── ui/           # Biblioteca de componentes compartidos
└── scripts/
    └── develop.ts    # Script de configuración automática
```

### Apps y Packages

- **`api`**: API RESTful con [Elysia](https://elysiajs.com/) y documentación Swagger automática
- **`db`**: Configuración de base de datos PostgreSQL con Docker
- **`docs`**: Documentación del proyecto con [Next.js](https://nextjs.org/)
- **`next-web`**: Aplicación web con [Next.js](https://nextjs.org/)
- **`ts-web`**: Aplicación web con [Vite](https://vitejs.dev/) + React + TypeScript
- **`@workspace/ui`**: Biblioteca de componentes React compartidos con [shadcn/ui](https://ui.shadcn.com/)
- **`@workspace/typescript-config`**: Configuraciones de TypeScript reutilizables

## 🔧 Comandos Disponibles

### Desarrollo

```bash
# Iniciar todas las aplicaciones en modo desarrollo
bun dev

# Iniciar una aplicación específica
bun dev --filter=api
bun dev --filter=ts-web
bun dev --filter=next-web
```

### Build

```bash
# Construir todas las aplicaciones
bun run build

# Construir una aplicación específica
bun run build --filter=docs
```

### Base de Datos

```bash
# Desde apps/api
cd apps/api

# Migrar esquema
bun run db:push

# Generar migraciones
bun run db:generate
```

### Linting y Formateo

```bash
# Ejecutar Biome (linter + formateador)
bun run lint

# Verificar tipos de TypeScript
bun run check-types
```

## 🎯 Configuración de Git Hooks

Este proyecto viene preconfigurado con **Husky** para automatizar la calidad del código:

- **Pre-commit**: Ejecuta automáticamente el linter en archivos modificados
- **Commit-msg**: Valida que los mensajes de commit sigan las [convenciones estándar](https://www.conventionalcommits.org/)

### Ejemplos de commits válidos:

```bash
git commit -m "feat: añadir autenticación de usuarios"
git commit -m "fix: corregir error en validación de formularios"
git commit -m "docs: actualizar documentación de la API"
```

## 🔄 Caché Remoto de Turborepo

Turborepo puede usar [Caché Remoto](https://turborepo.com/docs/core-concepts/remote-caching) para compartir artefactos de construcción entre máquinas:

```bash
# Autenticarse con Vercel
turbo login

# Vincular proyecto al caché remoto
turbo link
```

## 📚 Enlaces Útiles

### Documentación de Herramientas

- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Commitlint](https://commitlint.js.org/)** - Linter de commits
- **[Lint-staged](https://github.com/okonet/lint-staged)** - Pre-commit hooks
- **[Biome](https://biomejs.dev/)** - Linter y formateador

### Documentación del Stack Tecnológico

- **[Next.js](https://nextjs.org/docs)** - Framework de React para producción
- **[Elysia](https://elysiajs.com/introduction.html)** - Framework web ergonómico para Bun
- **[Drizzle ORM](https://orm.drizzle.team/docs/overview)** - ORM type-safe para TypeScript
- **[shadcn/ui](https://ui.shadcn.com/docs)** - Componentes UI reutilizables
- **[TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview)** - Manejo de estado del servidor
- **[TanStack Router](https://tanstack.com/router/latest/docs/framework/react/overview)** - Router type-safe para React
- **[TanStack Table](https://tanstack.com/table/latest/docs/framework/react/overview)** - Tablas flexibles para React
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Framework de CSS utility-first

### Documentación de Turborepo

- [Tareas](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caché](https://turborepo.com/docs/crafting-your-repository/caching)
- [Filtros](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuración](https://turborepo.com/docs/reference/configuration)
- [CLI](https://turborepo.com/docs/reference/command-line-reference)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'feat: añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.
