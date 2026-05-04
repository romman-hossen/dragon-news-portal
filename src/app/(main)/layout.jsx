import Header from "@/components/shared/Header";
import NavBar from "@/components/shared/NavBar";


const LayoutPage = ({ children }) => {
  return (
    <div>
      <>
       <Header />
        <NavBar />
        {children}
      </>
    </div>
  );
};

export default LayoutPage;
