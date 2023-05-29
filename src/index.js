
//creating a react app from scratch 
//showing a single h1 that says "good morning if between midinight and 12PM" [0 - 12) AM
//or "good afternoon" if bw 12PM and 6PM [12 - 18) PM
//or "good evening" if bw 6PM and midnight [18 - 0 ) PM 
// 0-12 AM
//12-18 PM
// hours [0-12) AM ---> morning >==0 && < 12
// hours [12-18) PM --> afternoon >==12 && <18
// hours [18- 0) PM --> evening
//apply the "heading" style in the styles.css
//dynamically change the color of the h1 using inline css styles
//morning = red , afternoon=green, night=blue

import React from "react";
import ReactDOM from "react-dom";


const currTime = new Date()
const hours =  currTime.getHours()



ReactDOM.render(<h1 className="heading">
    {hours}
</h1>, document.getElementById("root"))
