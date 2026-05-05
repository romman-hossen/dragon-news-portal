
import NavBar from "@/components/shared/NavBar";
import { montserrat } from "../layout";

const LayoutPage = ( {children}) => {
    return (
        <div className={`${montserrat.className}`}>
           <NavBar />
           {children} 
        </div>
    );
};

export default LayoutPage;