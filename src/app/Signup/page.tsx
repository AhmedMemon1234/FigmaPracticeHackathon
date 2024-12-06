import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function Signup(){
    return(
        <div className="ParentSign">
<div className="ChildSign">
    <div className="line">
    </div>
    <Image src={"/Side Image.png"} alt="SideImage" width={500} height={100} className="SignImage" />
    <div className="Signcontent">
<h1>Create an account</h1>
<p>Enter your details below</p>
<input type="text" placeholder="Name" /><br />
<input type="text" placeholder="Email or Phone Number" /><br />
<input type="text" placeholder="Password" /><br />
<button className="Createaccount">Create Account</button><br />
<FcGoogle className="Googleicon"/>
<button className="buttongoogle">Sign up with Google</button>
<h2><span>Already have account?</span><span className="span2"> Log in</span></h2>
    </div>
</div>

        </div>
    )
}