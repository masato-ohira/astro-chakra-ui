import { useApp } from '@/store/app'
import {
  Box,
  Button,
  FormControl,
  HStack,
  Link,
  Switch,
} from '@chakra-ui/react'

export const MyHeader = () => {
  const { mode, setMode } = useApp()
  const menu = [
    { name: 'Top', href: '/' },
    { name: 'About', href: '/about/' },
  ]

  return (
    <HStack justifyContent={'space-between'}>
      <Box fontSize={'4xl'} fontWeight={'bold'}>
        Site Logo
      </Box>
      <HStack justifyContent={'flex-end'}>
        {menu.map((i) => {
          return (
            <Link key={i.href} href={i.href}>
              <Button colorScheme={'teal'}>{i.name}</Button>
            </Link>
          )
        })}
        <FormControl ml={4}>
          <Switch
            colorScheme='teal'
            onChange={(e) => {
              setMode(e.target.checked)
            }}
          />
          {JSON.stringify({ mode })}
        </FormControl>
      </HStack>
    </HStack>
  )
}
