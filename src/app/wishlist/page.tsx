import Image from "next/image"
import Justforyou from "../justforyouhead/page"
import ForProducts from "../JustForyouProducts/page"
export default function wishlist(){

    return(
       <div className="Parentitems5">
<div className="Headwish">
    <h1>Wishlist (4)</h1>
</div>
<div className="Buttonwish">
    <button>Move All To Bag</button>
</div>
<div className="Childitem5">
          <Image src={"/Cart (2).png"} alt="Shirt1" width={300} height={50} className="img5"/>
          <div className="card5content">
          <p>The north coat</p>
          <h1>$260<span>$360</span></h1>
        
      </div>
</div>
        <div className="Childitem5">
          <Image src={"/Cart (3).png"} alt="Shirt1" width={300} height={50} className="img5"/>
          <div className="card5content">
          <p>Gucci duffle bag</p>
          <h1>$960</h1>
      </div>
</div>
        <div className="Childitem5">
          <Image src={"/Cart (4).png"} alt="Shirt1" width={300} height={50} className="img5"/>
          <div className="card5content">
          <p>RGB liquid CPU Cooler</p>
          <h1>$160</h1>
         
      </div>
</div>
        <div className="Childitem5">
          <Image src={"/Cart (5).png"} alt="Shirt1" width={300} height={50} className="img5"/>
          <div className="card5content">
          <p>Small BookSelf</p>
          <h1>$360</h1>
      </div>
</div>
<Justforyou/>
<ForProducts/>
       </div>
    )
}