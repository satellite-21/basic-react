

// this document shows how you can use javascript expressions as values
import React from "react";
import ReactDOM from "react-dom";
//now render 

const img = 'https://picsum.photos/200/300'

ReactDOM.render(
<div>
    <h1 className="heading_color" contentEditable='false' >Stay hungry, Stay Foolish </h1>
    <div>
        <img className="image-size" src="https://e0.pxfuel.com/wallpapers/217/384/desktop-wallpaper-hennie-funexplosie-08-steve-jobs-lr-stay-hungry-stay-foolish.jpg" alt="Steve_jobs1"></img>
        <img className="image-size" src="https://www.hollywoodreporter.com/wp-content/uploads/2015/03/steve_jobs_the_man_in_the_machine_still.jpg?w=3000" alt="Steve_jobs2"></img>
        <img className="image-size" src="https://www.investopedia.com/thmb/SOrSZjDw7SXxt4ojtfF0soN-TY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steve-jobs-apple-story_final-14a355d35609422798041dcfb2cb61f6.png" alt="Steve_jobs3"></img>
        
        {/* you can also use const to insert the images  */}
        <img className="image-size" src={img+ "?grayscale"} alt="random"/>
    </div>

</div>, 


document.getElementById("root"))