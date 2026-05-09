
import NavBar from "@/components/shared/NavBar";
import { montserrat } from "../layout";

const LayoutPage = ( {children}) => {
    return (
        <div className={`${montserrat.className} bg-slate-50 min-h-screen`}>
           <NavBar />
           {children} 
        </div>
    );
};

export default LayoutPage;