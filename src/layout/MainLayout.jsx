import Sidebar from "../layout/Siderbar";
import Header from "../layout/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f6f8fc]"> 
      <Sidebar className="h-full" /> 
      <div className="flex-1 flex flex-col pl-4 pr-4 pt-4 h-full overflow-auto"> 
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};


export default MainLayout;
