import Image from "next/image";

export default function Micbanner(){
    return(
        <div className="Parentmic">
<div className="Childmic">
    <Image src={"/Untitled design (10).jpg"} alt="Bigban" width={300} height={100} className="bigban"/>
    <div className="Content">
    <h2>Categories</h2>
    <h1>Enhance Your <br />Music Experience</h1>
    <Image src={"/timeframe.png"} alt="Timeframe" width={200} height={100} className="Timeframe"/>
    <button>Buy Now!</button>
    </div>
</div>
        </div>
    )
}