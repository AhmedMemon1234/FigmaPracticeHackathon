import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Salesec(){
    return(
        <div className="Parentsale">
<div className="Childsale">
    <div className="smallbox"><span>Today&#39;s</span></div>
<div className="FlashHead">
    Flash Sales
</div>
</div>
<div className="Days">
<h1>Days&nbsp;&nbsp;&nbsp;&nbsp;Hours&nbsp;&nbsp;&nbsp;&nbsp;Minutes&nbsp;&nbsp;&nbsp;&nbsp;Seconds</h1>
</div>
<div className="Spans">
<span className="hour1">23</span><span className="hour1">19</span><span className="hour1">03 </span><span className="hour1">56</span>
</div>
<div className="Spansdot">
<span className="hourdot">:</span><span className="hourdot">:</span><span className="hourdot">:</span>
</div>
<IoIosArrowRoundBack className="Arrowicon2"/>
<IoIosArrowRoundForward className="Arrowicon2"/>
        </div>
    )
}