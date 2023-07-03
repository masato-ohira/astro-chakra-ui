import { Box, Grid, Image, Stack } from '@chakra-ui/react'
import { MyLayout } from '@/components/layouts/MyLayout'

export const Top = () => {
  return (
    <MyLayout>
      <Grid templateColumns={'repeat(3, 1fr)'} gap={8}>
        {[...Array(24).keys()].map((n) => {
          return (
            <Box key={n} p={4} shadow={'md'}>
              <Stack spacing={2}>
                <Image
                  src={'http://placehold.jp/eee/ccc/800x400.png?text=img'}
                />
                <p>タイトル{n + 1}</p>
              </Stack>
            </Box>
          )
        })}
      </Grid>
    </MyLayout>
  )
}
