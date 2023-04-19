import Sidebar from "./Sidebar";
import RightSide from "./rightSide";

const LayoutContainer = () => {
  return (
    <div className="d-flex flex-row" style={{ height: "99%" }}>
      <Sidebar />
      <RightSide />
    </div>
  );
};

export default LayoutContainer;
