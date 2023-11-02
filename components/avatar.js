import { Box, Text } from '@chakra-ui/react'
import ContentfulImage from './contentful-image'

const Avatar = ({ name, picture }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box mr={4} w={12} h={12}>
        <ContentfulImage
          alt={name}
          className="object-cover h-full rounded-full"
          height={48}
          width={48}
          src={picture.url}
        />
      </Box>
      <Text fontSize="xl" fontWeight="bold">
        {name}
      </Text>
    </Box>
  )
}

export default Avatar
