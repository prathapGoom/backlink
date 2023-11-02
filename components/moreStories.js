import Link from 'next/link'
import { Box, Heading, Text, Grid } from '@chakra-ui/react'
import Avatar from './avatar'
import DateComponent from './date'
import CoverImage from './cover-image'

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }) => {
  return (
    <Box>
      <Box mb={5}>
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </Box>
      <Heading size="lg" mb={3}>
        <Link href={`/posts/${slug}`} _hover={{ textDecoration: 'underline' }}>
          {title}
        </Link>
      </Heading>
      <Text fontSize="lg" mb={4}>
        <DateComponent dateString={date} />
      </Text>
      <Text fontSize="lg" mb={4}>
        {excerpt}
      </Text>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </Box>
  )
}

const MoreStories = ({ morePosts }) => {
  return (
    <Box as="section">
      <Heading size="2xl" mb={8} fontWeight="bold" lineHeight="tight">
        More Stories
      </Heading>
      <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={8} mb={32}>
        {morePosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default MoreStories;
