import { defineConfig } from 'astro/config'
import { ChakraProvider } from '@chakra-ui/react'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
})
