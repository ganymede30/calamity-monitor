import React from 'react'
import { Button } from "@material-ui/core";





const Health = () => {
     return (
         <div>
             <h1> Below are a few resources to stay informed on the current state of the pandemic </h1>
             
                 <Button href= "https://www.who.int/">
                    Link to the World Health Organization
                 </Button>
            <div>
                 <Button href= "https://www.cdc.gov/">
                    Link to the Centers of Disease Control and Prevention
                 </Button>
                 </div>
            <div>
                <Button href= "https://www.google.com/search?q=coronavirus+tips&fbx=dothefive">
                    Do the Five
                </Button>
            </div>
         </div>
     )
 }

 export default Health