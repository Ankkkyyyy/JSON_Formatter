import {Flex,Box,Text ,Link,Avatar,Badge, Center } from '@chakra-ui/react'
import { ExternalLinkIcon} from '@chakra-ui/icons'
import React from 'react'
import  ankit from './Ankit.jpg' 

function FooterJS() {
  return (

    <Box bg="rgb(36 74 104)"p="4" borderRadius="md">
    <Center mt="5">
      <Flex>
        <Avatar src={ankit} />
        <Box ml="3">
          <Text fontWeight="bold" color="white">
           Ankit Mishra
          </Text>
          <Text fontSize="sm" color="white">
           A.I & ML Engineer + Developer 
          </Text>
          <Text>
            <Link href="https://www.linkedin.com/in/ankkkyyyy/" isExternal color="white">
              Linkedin
              <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
        </Box>
      </Flex>
    </Center>
  </Box>
    
  )
}

export default FooterJS
