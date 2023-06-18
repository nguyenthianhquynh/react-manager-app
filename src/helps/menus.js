import { act } from "react-dom/test-utils";

const menus = {
    dashboard: {
        text: "Dashboard",
        link: "/",
        icon: "home",
        active: true
    },
    Feature: {
        text: "Feature",
        link: "/",
        icon: "fire",
        isExpand: true,
        submenu: {
            feature1: {
                text: "Feature 1",
                link: "/",
                icon: "faHome",
            },
            feature2: {
                text: "Feature 2",
                link: "/",
                icon: "fa fa-circle-o",
                submenu: {
                    feature21: {
                        text: "Feature 2.1",
                        link: "/",
                        icon: "faHome"
                    },
                    feature22: {
                        text: "Feature 2.2",
                        link: "/",
                        icon: "faHome"
                    }
                }
            },
        }
    },
    about: {
        text: "About",
        link: "/",
        icon: "cake"
    },
}
export default menus;