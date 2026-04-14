import WeAbout from "./wecomp/WeAbout";
import WeCraousel from "./wecomp/WeCraousel";
import WeFooter from "./wecomp/WeFooter";
import WeHome from "./wecomp/WeHome";
import WeNavbar from "./wecomp/WeNavbar";

 
 
export default function Home() {
 return (
   <div>
    <WeNavbar />
    <WeCraousel />
    <WeHome />
    <WeAbout /> 
    <WeFooter />
   </div>
 );
}