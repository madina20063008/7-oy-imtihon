import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

export default Layout;