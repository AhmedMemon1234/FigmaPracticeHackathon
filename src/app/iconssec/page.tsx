import Image from "next/image";

export default function Iconsec(){
    return(
        <div className="Parenticon">
            <div className="Childicon">
            <Image src={"/Services.png"} alt="Iconservice" width={200} height={100} className="Iconservice"/>
            </div>
<div className="Childiconcontent">
<h1>FREE AND FAST DELIVERY</h1>
<p>Free delivery for all orders over 140$</p>
</div>
            <div className="Childicon">
            <Image src={"/Services (1).png"} alt="Iconservice" width={200} height={100} className="Iconservice"/>
            </div>
<div className="Childiconcontent">
<h1>24/7 CUSTOMER SERVICE</h1>
<p>Friendly 24/7 customer service</p>
</div>
            <div className="Childicon">
            <Image src={"/Services (2).png"} alt="Iconservice" width={200} height={100} className="Iconservice"/>
            </div>
<div className="Childiconcontent">
<h1>MONEY BACK GUARANTEE</h1>
<p>We return money within 30 days</p>
</div>
        </div>
    )
}