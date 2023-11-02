import { Box, Link } from '@chakra-ui/react'
import ContentfulImage from './contentful-image'

const CoverImage = ({ title, url, slug }) => {
  const image = (
    <ContentfulImage
      alt={`Cover Image for ${title}`}
      priority
      width={2000}
      height={1000}
      className={`shadow-small ${slug ? 'hover:shadow-medium transition-shadow duration-200' : ''}`}
      src={url}
    />
  )

  return (
    <Box mx={slug ? 0 : 'auto'}>
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title} isExternal>
          {image}
        </Link>
      ) : (
        image
      )}
    </Box>
  )
}

export default CoverImage
