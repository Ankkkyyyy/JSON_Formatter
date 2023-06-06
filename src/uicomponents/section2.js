

import { Box,Text, HStack,Center, Heading,Link} from "@chakra-ui/react";

import { ExternalLinkIcon } from '@chakra-ui/icons'


function Section2() {
//  bg="#EBF8FF"
   
    return (
  <Box pt="20px" ps="20px" pe="20px" pb="20px" color="white" >
    <Center>
         <Heading textAlign="center" color="#6C62CA" as="u"> Learn About JSON</Heading>
         </Center>

         
         <HStack justifyContent="center">
    <Center>
        <Text textAlign="start" mt="20px" width={['100%', '100%', '60%']}>
            JSON or JavaScript Object Notation is a language-independent open data format that uses human-readable text to express data objects consisting of attribute-value pairs.
            Although originally derived from the JavaScript scripting language, JSON data can be generated and parsed with a wide variety of programming languages including JavaScript, PHP, Python, Ruby, and Java.
            <Link href="https://www.json.org/json-en.html" color="blueviolet" isExternal>Click Me<ExternalLinkIcon mx='4px' /></Link> to know more about JSON.
        </Text>
    </Center>
</HStack>

  

        </Box>


       
    )
  }


  export default Section2;