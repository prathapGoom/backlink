import { Image } from '@chakra-ui/react'

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ContentfulImage = (props) => {
  return (
    <Image
      alt={props.alt}
      loader={contentfulLoader}
      {...props}
      fallbackSrc="path/to/your/fallback/image.jpg" // Optional: set a fallback image
    />
  )
}

export default ContentfulImage
