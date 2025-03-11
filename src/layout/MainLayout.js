import Sidebar from "../layout/Siderbar";
import Header from "../layout/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden"> 
      <Sidebar className="h-full" /> 
      <div className="flex-1 flex flex-col pl-6 pt-4 h-full overflow-auto"> 
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
