import { Center,Box,Text ,Link} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react'

function FooterJS() {
  return (

  <Box color="white">
    <Center p="20px">
    <Text >Made with 💜 by <Link href="https://www.linkedin.com/in/ankkkyyyy/"  isExternal >Ankit Mishra <ExternalLinkIcon mx='2px' /></Link></Text>
    </Center>
  </Box>
    
  )
}

export default FooterJS
