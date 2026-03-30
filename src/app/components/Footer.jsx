import DescriptionApp from "./DescriptionApp";
import DownloadApp from "./DownloadApp";
import FooterConditions from "./FooterConditions";
import FooterLinks from "./FooterLinks";

export default function Footer(){
     return(
       <div className="relative w-full">
            <FooterLinks/>
            <DownloadApp/>
            <DescriptionApp/>
            <FooterConditions/>
       </div>
     );
}