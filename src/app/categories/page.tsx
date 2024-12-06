import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Categories(){
    return(
        <div className="Parentcategory">
<div className="Childcategory">
    <div className="smallbox2"><span>Categories</span></div>
</div>
<div className="Browsehead">
    <h1>Browse By Category</h1>
<IoIosArrowRoundBack className="Arrowicon3"/><IoIosArrowRoundForward className="Arrowicon4"/>
</div>
<div className="Categorysec">
    <Image src={"/Category-Phone (1).png"} alt="Category" width={300} height={100} className="Categoryimage"/>
    <Image src={"/Category-Phone (2).png"} alt="Category" width={300} height={100} className="Categoryimage"/>
    <Image src={"/Category-Phone (3).png"} alt="Category" width={300} height={100} className="Categoryimage"/>
    <Image src={"/Category-Phone (4).png"} alt="Category" width={300} height={100} className="Categoryimage"/>
    <Image src={"/Category-Phone (5).png"} alt="Category" width={300} height={100} className="Categoryimage"/>
</div>
        </div>
    )
}