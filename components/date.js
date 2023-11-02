import { Text } from '@chakra-ui/react'
import { format } from 'date-fns'

const DateComponent = ({ dateString }) => {
  return (
    <Text as="time" dateTime={dateString}>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </Text>
  )
}

export default DateComponent
