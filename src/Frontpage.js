import SignOut from "./SignOut";


export default function Frontpage () {

    

    function randomImg() {
        var img = [
          {img:  "image1.png"},
          {img:  "image2.png"},
          {img:  "image3.png"},
          {img:  "image6.png"},
          {img:  "image7.png"},
          {img:  "image8.png"},
          {img:  "image9.png"},
          {img:  "image10.png"},
          {img:  "image11.png"},
          {img:  "image12.png"},
          {img:  "image13.png"},
          {img:  "image14.png"},
    
        ];
        var picture = img[Math.floor(Math.random() * img.length)];
        document.getElementById("picture").innerHTML =
          '<img src="' + picture.img + '">';
      }
    return (                                                                      //FRONTPAGE
        <div className="FrP">
            <div>
            { <SignOut /> } 
                <div>
                    <div className="petPic" id="picture"></div>
                    <button onClick={randomImg} className="buttonL">
                        Like
                    </button>
                    <button onClick={randomImg} className="buttonD">
                        Dislike
                    </button>
                </div>
            </div>
        </div>
    )}