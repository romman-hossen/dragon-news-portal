
import NavBar from "@/components/shared/NavBar";

const LayoutPage = ( {children}) => {
    return (
        <>

           <NavBar />
           {children} 
        </>
    );
};

export default LayoutPage;