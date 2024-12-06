import Image from "next/image"
export default function Bestsell(){
    return(
        <div className="Parentitems2">
        <div className="Childitem2">
          <Image src={"/Cart (2).png"} alt="Shirt1" width={300} height={50} className="img3"/>
          <div className="card2content">
          <p>The north coat</p>
          <h1>$260 <span>$360</span></h1>
          <Image src={"/star5.png"} alt="Stars" width={200} height={100} className="star22"/>
          <h3>(65)</h3>
      </div>
</div>
        <div className="Childitem2">
          <Image src={"/Cart (3).png"} alt="Shirt1" width={300} height={50} className="img3"/>
          <div className="card2content">
          <p>Gucci duffle bag</p>
          <h1>$960 <span>$1160</span></h1>
          <Image src={"/star3.png"} alt="Stars" width={200} height={100} className="star22"/>
          <h3>(65)</h3>
      </div>
</div>
        <div className="Childitem2">
          <Image src={"/Cart (4).png"} alt="Shirt1" width={300} height={50} className="img3"/>
          <div className="card2content">
          <p>RGB liquid CPU Cooler</p>
          <h1>$160 <span>$170</span></h1>
          <Image src={"/star3.png"} alt="Stars" width={200} height={100} className="star22"/>
          <h3>(65)</h3>
      </div>
</div>
        <div className="Childitem2">
          <Image src={"/Cart (5).png"} alt="Shirt1" width={300} height={50} className="img3"/>
          <div className="card2content">
          <p>Small BookSelf</p>
          <h1>$360</h1>
          <Image src={"/star5.png"} alt="Stars" width={200} height={100} className="star22"/>
          <h3>(65)</h3>
      </div>
</div>

      </div>
    )
}