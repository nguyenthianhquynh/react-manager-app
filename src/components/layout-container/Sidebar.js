import { useState, useEffect } from "react";
import Icon from "../Icon/Icon";
import {
  faBars,
  faHome,
  faFire,
  faCake,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileSidebar = (
    <>
      <div className="w-contain-icon d-flex justify-content-center align-items-center">
        <Icon icon={faBars} />
      </div>
      <div className="w-contain-icon d-flex justify-content-center align-items-center">
        <Icon icon={faHome} />
      </div>
      <div className="w-contain-icon d-flex justify-content-center align-items-center">
        <Icon icon={faFire} />
      </div>
      <div className="w-contain-icon d-flex justify-content-center align-items-center">
        <Icon icon={faCake} />
      </div>
    </>
  );

  const desktopSidebar = (
    <>
      <div className="w-contain-icon d-flex justify-content-center fw-bold align-items-center">
        MY APP 
      </div>
      <div className="px-2 w-contain-icon d-flex align-items-center">
        Home
      </div>
      <div className="px-2 w-contain-icon d-flex align-items-center">
        Features 1
      </div>
      <div className="px-2 w-contain-icon d-flex align-items-center">
        Features 2
      </div>
    </>
  );

  return (
    <div className="border left-side">
      <div className="mt-2">
        {mobile ? mobileSidebar : desktopSidebar}
      </div>
    </div>
  );
};

export default Sidebar;

