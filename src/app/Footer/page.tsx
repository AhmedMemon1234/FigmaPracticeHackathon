import Image from "next/image";

export default function Footer(){
    return(
        <div className="Parentfooter">
<div className="Childfooter">
    <h1>Exclusive <br /><span className="subfoot">Subscribe <br /></span><span className="paragraphfoot">Get 10% off your first order</span><br /> <input type="text" placeholder="Enter Your Email"/><Image src={"/icon-send.png"} alt="Iconsend" width={100} height={100} className="Iconsend"/></h1>
</div>
<div className="Childfooter2">
    <h1>Support</h1>
    <p>111 Bijoy sarani&#44; Dhaka&#44;<br /> DH 1515&#44; Bangladesh. <br />exclusive@gmail.com <br />+88015-88888-9999</p>
</div>
<div className="Childfooter3">
    <h1>Account</h1>
    <p>My Account<br />Login / Register<br />Cart<br />Wishlist <br />Shop</p>
</div>
<div className="Childfooter4">
    <h1>Quick Link</h1>
    <p>Privacy Policy<br />Terms Of Use<br />FAQ<br />Contact</p>
</div>
<div className="Childfooter5">
    <h1>Download App</h1>
    <p>Save $3 with App New User Only</p>
    <Image src={"/Frame 719.png"} alt="Google" width={100} height={100} className="imggoogle"/>
    <Image src={"/Frame 741.png"} alt="Google" width={100} height={100} className="imgicons"/>
</div>
<div className="Childfooter6">
    <p>&copy; Copyright Rimel 2022.All right reserved</p>
</div>
        </div>
    )
}