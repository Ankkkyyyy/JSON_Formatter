
import {Textarea,Box} from "@chakra-ui/react";


const Output=(props)=>{
    
    return (   
   <Box pl={["45px","45px","10px"]} >
      <Textarea  placeholder={props.outputPlaceholder} w={["300px","300px","500px"]} mt="50px"  h={["100px","500px","500px"]}
    size="xl" pl="20px"  bg="rgb(36 74 104)" color= "#aaaaaa" value={props.value} onChange={props.handleOnChange} /> 
    
   </Box>


    );
}

export default Output;
