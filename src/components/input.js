
import {Textarea,Box} from "@chakra-ui/react";



const Input=(props)=>{
 
    return (
          <Box  pl={["45px","45px","50px"]} pr={["45px","45px","10px"]}  display="inline-flex" gap="10px" line-height="21px"      >
             {/* <Textarea bgImage="url(http://i.imgur.com/2cOaJ.png)"  bgAttachment="local" bgRepeat="no-repeat"     placeholder={props.inputPlaceholder} w={["300px","300px","500px"]} mt="50px" h="500px"
             size="xl" pl="30px" variant="filled" bg="#444444" color= "#aaaaaa" value={props.value} onChange={props.handleOnChange} /> */}
             <Textarea  placeholder={props.inputPlaceholder} w={["300px","300px","500px"]} mt="50px" h={["100px","500px","500px"]}  size="xl"
            pl="30px"  bg="rgb(36 74 104)" color= "#aaaaaa" value={props.value} onChange={props.handleOnChange}  /> 
          </Box>

    );
}
// variant="filled"
// h="500px"
// size={["lg","xl","xl"]}
export default Input;
