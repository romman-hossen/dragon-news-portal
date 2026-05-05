import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import NavBar from "@/components/shared/NavBar";


const LayoutPage = ({ children }) => {
  return (
    <div className="container mx-auto">   
       <Header />
       <BreakingNews />
        <NavBar />
        {children}
  
    </div>
  );
};

export default LayoutPage;
