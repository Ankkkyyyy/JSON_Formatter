
import {Box,Button,VStack} from "@chakra-ui/react";
import React from "react";
const Buttons=({onClickF,Refresh,onClickM,Copy})=>
{
    return(

      <Box mt={["10px","30px","200px"]} mb={["10px","30px","200px"]} >
      <VStack mt="10px" p="10px"  >
  <Button  colorScheme='purple' w='100px'  onClick={onClickF}>Format</Button>
  <Button colorScheme='purple' w='100px'  onClick={onClickM}>Minify</Button>
  <Button colorScheme='purple' w='100px'  onClick={Copy}>Copy</Button>
  <Button colorScheme='purple' w='100px'  onClick={Refresh}>Clear</Button>
  
  </VStack>
       </Box>
    )
}


export default Buttons;