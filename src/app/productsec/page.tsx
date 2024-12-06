import Image from "next/image";

export default function Product(){
    return( 
    <div className="Parentitems">
        <div className="Childitem1">
          <Image src={"/Frame570 (6).png"} alt="Shirt1" width={300} height={50} className="img1"/>
          <div className="card1content">
          <p>HAVIT HV-G92 Gamepad</p>
          <h1>$120 <span>$160</span></h1>
          <Image src={"/star5.png"} alt="Stars" width={200} height={100} className="star"/>
          <h3>(88)</h3>
      </div>
</div>
<div className="Childitem1">
          <Image src={"/Frame570 (7).png"} alt="Shirt1" width={300} height={50} className="img1"/>
          <div className="card1content">
          <p>AK-900 Wired Keyboard</p>
          <h1>$960 <span>$1160</span></h1>
          <Image src={"/star4.png"} alt="Stars" width={200} height={100} className="star"/>
          <h3>(75)</h3>
      </div>
</div>
<div className="Childitem1">
          <Image src={"/Frame570 (8).png"} alt="Shirt1" width={300} height={50} className="img1"/>
          <div className="card1content">
          <p>IPS LCD Gaming Monitor</p>
          <h1>$370 <span>$400</span></h1>
          <Image src={"/star5.png"} alt="Stars" width={200} height={100} className="star"/>
          <h3>(99)</h3>
      </div>
</div>  <div className="Childitem1">
          <Image src={"/Frame570 (9).png"} alt="Shirt1" width={300} height={50} className="img1"/>
          <div className="card1content">
          <p>S-Series Comfort Chair</p>
          <h1>$375 <span>$400</span></h1>
          <Image src={"/star3.png"} alt="Stars" width={200} height={100} className="star"/>
          <h3>(99)</h3>
      </div>
</div>  <div className="Childitem1">
          <Image src={"/Frame570 (5).png"} alt="Shirt1" width={300} height={50} className="img2"/>
          <div className="card1content">
          <p>S-Series Com</p>
          <h1>$375 <span>$400</span></h1>
          <Image src={"/star3.png"} alt="Stars" width={200} height={100} className="star"/>
      </div>
</div>
<div className="btn1Parent"><button className="btn1">View All Products</button>
</div>
        </div>
    )
}