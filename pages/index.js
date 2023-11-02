import Head from 'next/head'

import styles from '../styles/Home.module.css'
import MoreStories from '../components/moreStories'
import { Avatar, Box, Image } from '@chakra-ui/react'
import { Card, CardHeader,Stack,Heading,Text,Divider,Button,Grid,ButtonGroup, CardBody, CardFooter } from '@chakra-ui/react'
import { wrap } from 'framer-motion'
import Blog from './how-to-protect-yourself'

export default function Home() {
  return (
    <>
      <Blog/>
    </>
    // <Box padding="7%">
    //   <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)"}}>
    //     {data.map((item) => (
    //       <Box marginBottom={"100px"} marginRight={"50px"}>
    //         <Image
    //           src='/cover3.jpg'
    //           alt='Green double couch with wooden legs'
    //           borderRadius='lg'
    //           mb={4}
    //         />
    //         <Stack spacing={3}>
    //           <a href={`/blog/${item.slug}`}><Heading as="h1" size='md'>{item?.title}</Heading></a>
    //           <Text>{item?.date}</Text>
    //           <Text>{item?.excerpt}</Text>
    //         </Stack>
    //         <ButtonGroup spacing={2} mt={4} display={"flex"} alignItems={"center"}>
    //           <Avatar name="prathap"/>
    //           <Text as="b">{item?.author?.name}</Text>
    //         </ButtonGroup>
    //       </Box>
    //     ))}
    //   </Grid>
    // </Box>
  )
}

const data=[
  {
    title:"Preview Mode for Static Generation",
    coverImage:"/vercel.svg",
    date:"April 28, 2020",
    author:{
      name:"prathap",
      picture:"favicon.io"
    },
    slug:"Preview Mode for Static Generation",
    excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
  } ,
  {
    title:"Preview Mode for Static Generation",
    coverImage:"/vercel.svg",
    date:"April 28, 2020",
    author:{
      name:"prathap",
      picture:"/vercel.svg"
    },
    slug:"Preview Mode for Static Generation",
    excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
  } ,
  {
    title:"Preview Mode for Static Generation",
    coverImage:"/vercel.svg",
    date:"April 28, 2020",
    author:{
      name:"prathap",
      picture:"/vercel.svg"
    },
    slug:"Preview Mode for Static Generation",
    excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
  },
  {
    title:"Preview Mode for Static Generation",
    coverImage:"/vercel.svg",
    date:"April 28, 2020",
    author:{
      name:"prathap",
      picture:"/vercel.svg"
    },
    slug:"Preview Mode for Static Generation",
    excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
  } 
]