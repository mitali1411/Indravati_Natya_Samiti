import React from "react";
import Logo from "../assets/Logo.jpg";

const Sidebar = ({ collapsed = false,setCollapsed}) => {


    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    const menuItem = [
        {
            id: 1,
            title: "Home",
            imgSrc: "🏠",
            link: "/",
        },
        {
            id: 2,
            title: "About",
            imgSrc: "🏠",
            link: "/about",
        },
        {
            id: 3,
            title: "Blog",
            imgSrc: "🏠",
            link: "/",
        },
        {
            id: 4,
            title: "Services",
            imgSrc: "🏠",
            link: "/",
        },
        {
            id: 5,
            title: "Contact",
            imgSrc: "🏠",
            link: "/",
        },
    ]

    return (
        <div className="py-0" id="sidebar">
            {/* Sidebar */}
            <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
                <img src={Logo} alt="" style={{borderRadius:30, width:50}}/>
                <ul className="sidebar-menu mt-3">
                    <>
                        {
                            menuItem.map((item, index) => {
                                return (
                                    <div key={item?.id} className="d-flex align-items-center">
                                        <li>{item?.imgSrc}</li>
                                        {
                                            !collapsed && <li>{item?.title}</li>
                                        }
                                    </div>
                                )
                            })
                        }
                    </>
                    <hr />
                </ul>
               <div className="collapse-btn">
               <button className="btn btn-light" id="side-btn" onClick={() => toggleSidebar()}>☰</button>
               </div>
            </div>
        </div>
    );
};

export default Sidebar;
