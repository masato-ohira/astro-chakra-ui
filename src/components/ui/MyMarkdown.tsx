import MarkdownIt from 'markdown-it'
import Deflist from 'markdown-it-deflist'
import { Box, BoxProps } from '@chakra-ui/react'

const mdOptions: MarkdownIt.Options = {
  html: true,
  breaks: true,
  linkify: false,
  typographer: true,
}
const md = new MarkdownIt(mdOptions)
md.use(Deflist)

interface MdProps extends BoxProps {
  children?: string
}

export const MyMarkdown = (props: MdProps) => {
  const { children, ...rest } = props
  const html: string = md.render(children || '')
  return (
    <>
      <Box {...rest} dangerouslySetInnerHTML={{ __html: html }}></Box>
    </>
  )
}
