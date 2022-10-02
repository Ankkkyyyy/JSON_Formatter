import {Box,Flex, space, Spacer} from "@chakra-ui/react";

import Input from "./components/input";
import Output from "./components/output";
import  Buttons  from "./components/buttons";
import FooterJS from './uicomponents/FooterJS'
import Header from "./uicomponents/header";
import Section from "./uicomponents/section";
import Section2 from "./uicomponents/section2";
import { useState } from "react";
import swal from "sweetalert";


function App() {

    const Refresh = ()=>{
    
      setInputArea("");
      setOutputArea("");
      setInputPlaceholder("Enter your unformatted JSON here.......")
      setoutputPlaceholder("Here will be your formatted JSON....");
    

    }

    const Copy = ()=>{

      if(outputArea.length==0)
      {    
        swal ( "Invalid Operation." ,  "Please Click Format Before Copying." ,  "error" ) 
      }
     else{
  navigator.clipboard.writeText(outputArea);
  document.getSelection().removeAllRanges()
  // props.showAlert("Copied to clipboard","dark")
  swal ( "Done" ,  "Copied to Clipboard" ,  "success" )
}
        
    }

    const handleOnChange = (event) =>{

      setInputArea(event.target.value)
      // setOutputArea(event.target.value);
    
    }
  
  
  const [inputArea,setInputArea] = useState("");
  const [outputArea,setOutputArea] = useState("");

  const [inputPlaceholder,setInputPlaceholder] = useState("Enter your unformatted JSON here.......");
  const [outputPlaceholder,setoutputPlaceholder] = useState("Here will be your formatted JSON....");


  //  As instructed by Rahul kinra sir to not use stringify directly 
  let   AnkitStringify = JSON.stringify;
  JSON.stringify = (obj, replacer, space) =>
   AnkitStringify(obj, replacer || ( (key, value) =>
        {
           if(key && value === obj)
  
            return key;
       
            return value;
         }
      ),
   space)


    let   Ankitparse= JSON.parse;
    JSON.parse = (data) =>Ankitparse(data|| (  (key,value) =>
       {
          if(key && value === data)
          
           return key;
 
           return value;
        }  
    )
  )

//  Adding Line Numbers in Textarea

// const textare1 = document.querySelector('Textarea')
// const lineNumbers = document.querySelector('.line-numbers')
// let textarea1;
// let  lineNumbers1;


// textarea1.addEventListener('keyup', event => {
//   const numberOfLines = event.target.value.split('\\n').length

//   lineNumbers1.innerHTML = Array(numberOfLines)
//     .fill('<span></span>')
//     .join('')
// })

    const Format = () =>{

      try{
      // const formatted = JSON.stringify(JSON.parse(inputArea), null, 4);  
       const formatted =  AnkitStringify(Ankitparse(inputArea), null, 4 );
   
      setOutputArea(formatted)

      }
      catch(e){
        setInputArea("");
        setOutputArea("");
        setInputPlaceholder("Enter Valid JSON Data")
        setoutputPlaceholder("Enter Valid JSON Data to have Proper Output");
        swal ( "Invalid" ,  "Enter Valid JSON Data !" ,  "error" )
      //  alert("Enter Valid JSON Data !")
       
      }
    }
    const Minify = () =>{

      try{
      // const formatted = JSON.stringify(JSON.parse(inputArea), null, 4);  
       const formatted =  AnkitStringify(Ankitparse(inputArea) );
   
      setOutputArea(formatted)

      }
      catch(e){
        setInputArea("");
        setOutputArea("");
        setInputPlaceholder("Enter Valid JSON Data")
        setoutputPlaceholder("Enter Valid JSON Data to have Proper Output");
        swal ( "Invalid" ,  "Enter Valid JSON Data !" ,  "error" )
      //  alert("Enter Valid JSON Data !")
       
      }


    }


  
   

  return (
  <Box>
    <Header/>
    <Section/>

    <Flex direction={['column','column','row']} >

         <Input input ="inputArea" 
                value={inputArea} 
                handleOnChange={handleOnChange} 
                inputPlaceholder={inputPlaceholder}             
                />    

         <Buttons onClickF={Format} 
                  Refresh={Refresh} onClickM={Minify} Copy={Copy} />
    <Output output="outputArea" 
            value={outputArea} 
            // handleOnChange={handleOnChange} 
            outputPlaceholder={outputPlaceholder}  />
    </Flex>

  <Section2/>

  <FooterJS/>
 
  </Box>
  );
}


export default App;
