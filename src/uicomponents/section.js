

import { Box,Text, HStack, Button,Center,Heading} from "@chakra-ui/react";



function Section() {

   

    return (
        <Box pt="20px" ps="20px" pe="20px" textAlign="center">
        <Center>
            <Heading color="white" fontWeight="light" as="u" pb="24px">
                Do it with JSON Formatter
            </Heading>
        </Center>
    
        <HStack justifyContent="center">
            <Text textAlign="center" color="white">
                This free online tool is designed to assist users in formatting and beautifying their JSON codes. You can restructure your JSON and discard all unwanted and unnecessary elements using this online JSON formatter. With just a few clicks, you can format your JSON code effortlessly.
            </Text>
        </HStack>
    </Box>
    

       
    )
  }


  export default Section;