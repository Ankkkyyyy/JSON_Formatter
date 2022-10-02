

import { Box,Text, HStack, Button,Center,Heading} from "@chakra-ui/react";



function Section() {

   

    return (
        <Box pt="20px" ps="20px" pe="20px" >
            <Center>
            <Heading color="white" fontWeight="light" as='u' pb="24px" >Do it with JSON Formatter</Heading>
      
            </Center>
        <HStack>
          
    <Text textAlign="start" color="white" > This free online tool designed to assist users in formatting and beautifying their JSON codes. You can restructure your JSON and discard all unwanted and unnecessary elements from your JSON with this online JSON formatter. A few clicks on your device will be enough to format your JSON code with this online tool.
    
    </Text> 
  
    
     </HStack>
 
        </Box>


       
    )
  }


  export default Section;