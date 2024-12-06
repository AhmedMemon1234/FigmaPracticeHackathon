import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
export default function Header(){
    return(
        <div className="Parentheader">
            <div className="Childheader">
                <h1>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span> Shop Now</span></h1>
                <h2>English &#129171;</h2>
                </div>
            <div className="Childheader2">
                <h1>Exclusive</h1>
                <ul>
                    <li className="Home"><a href="/">Home</a></li>
                    <li className="Contact">Contact</li>
                    <li className="About">About</li>
                    <li className="Signup"><a href="/Signup">Sign Up</a></li>
                </ul>
                <input type="text" placeholder="What are you looking for?" className="inputsearch" /><IoSearch className="icon"/><a href="/wishlist" className="icon2"><CiHeart/></a><a href="/Cartitems" className="icon3"><IoCartOutline/></a><IoMdContact className="icon4"/>
            </div>
        </div>
    )
}