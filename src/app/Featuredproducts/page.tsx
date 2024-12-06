import Image from "next/image";

export default function Featuredproducts(){
    return(
        <div className="Parentfeatured">
 <Image src={"/Frame 684.png"} alt="Frame" width={400} height={100} className="FeaturedBan"/>
    <Image src={"/Frame 685.png"} alt="Frame" width={400} height={100} className="FeaturedBan2"/>
    <Image src={"/Frame 686.png"} alt="Frame" width={400} height={100} className="FeaturedBan3"/>
    <Image src={"/Frame 687.png"} alt="Frame" width={400} height={100} className="FeaturedBan4"/>
        </div>
    )
}