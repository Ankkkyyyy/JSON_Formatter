import { Box,Text, HStack} from "@chakra-ui/react";




function Header() {

    // bg="#63B3ED"
    return (
        <Box p="20px" bg="#6C62CA"  width="100%"  >
        <HStack>
    <Text textAlign="start"  fontWeight='700' fontSize="40px"> JSON  </Text> 
    <Text color="#EBF8FF" fontWeight='700' fontSize="40px" > Formatter</Text>
     </HStack>



        </Box>


       
    )
  }


  export default Header;