import { Box, Button, HStack, Link } from '@chakra-ui/react'

export const MyHeader = () => {
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
      </HStack>
    </HStack>
  )
}
