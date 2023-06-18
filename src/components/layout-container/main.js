import Table from "../table/table";
import Form from "../form/form";
import React, { useState } from "react";
import { WeavyClient, WeavyProvider, Chat } from "@weavy/uikit-react";
import "@weavy/uikit-react/dist/css/weavy.css";

const weavyClient = new WeavyClient({
  url: "https://5bb56266b2d84907a296223be035d45b.weavy.io",
  tokenFactory: async () => "wyu_K24SYvoq2S4mS8XeHfw3HTfVCXSNcN35WwwZ",
});

const Main = () => {
  const data = [];
  const [isShowPopupMessenger, setIsShowPopupMessenger] = useState(false);

  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 20; j++) {
      if (i === 0) row.push(`column ${i}`);
      else row.push(`element ${j}`);
    }
    data.push(row);
  }
  return (
    <div className="main px-2">
      <div className="top-main">
        <Form />
      </div>
      <div className="bottom-main">
        <Table data={data} />
        {/* create a div circle icon message click show chat box  */}
        <div className="circle-icon-message">
          <div className="btn btn-messenger rounded-circle">
            <div className="position-relative">
              <button
                className="btn btn-messenger rounded-circle"
                onClick={setIsShowPopupMessenger.bind(
                  this,
                  !isShowPopupMessenger
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-messenger"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
                </svg>
              </button>

              {isShowPopupMessenger && (
                <div className="position-absolute popup-messanger">
                  <WeavyProvider client={weavyClient}>
                    <Chat uid="demochat" />
                  </WeavyProvider>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
