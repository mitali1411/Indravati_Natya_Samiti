import React from "react";
import Logo from "../assets/Logo.png";
import { BiHomeAlt } from "react-icons/bi";
import { FcAbout, FcContacts } from "react-icons/fc";
import { MdEvent } from "react-icons/md";
import { FaServicestack } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ collapsed = false,setCollapsed}) => {


    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    const menuItem = [
        {
            id: 1,
            title: "Home",
            imgSrc: <BiHomeAlt/>,
            link: "/",
        },
        {
            id: 2,
            title: "About",
            imgSrc: <FcAbout/>,
            link: "/about",
        },
        {
            id: 3,
            title: "Blog",
            imgSrc: <MdEvent/>,
            link: "/blog",
        },
        {
            id: 4,
            title: "Services",
            imgSrc: <FaServicestack/>,
            link: "/services",
        },
        {
            id: 5,
            title: "Contact",
            imgSrc: <FcContacts/>,
            link: "/contact",
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
                                        <Link to={item?.link}><li>{item?.imgSrc}</li></Link>
                                        {
                                            !collapsed && <Link to={item?.link}><li>{item?.title}</li></Link>
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
