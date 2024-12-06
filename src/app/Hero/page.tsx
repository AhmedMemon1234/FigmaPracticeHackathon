import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
export default function Hero(){
    return(
        <div className="Parenthero">
<div className="Childhero">
    <ul>
        <li>Woman&#39;s Fashion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</li>
        <li>Men&#39;s Fashion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby&#39;s & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
    </ul>
    <Image src={"/ios.jpg"} alt="Frame" width={500} height={100} className="Bigbanner"/>
    <Image src={"/iphonelogo.png"} alt="Iphone" width={300} height={100} className="Iphonelogo"/>
    <h1>iPhone 14 Series</h1>
    <h1 className="Heading">Up to 10% <br />off Voucher</h1>
    <button>Shop Now</button><FaArrowRight className="arrowicon"/>
    <Image src={"/divivder.png"} alt="Divider" width={300} height={100} className="divider"/>
</div>
        </div>
    )
}