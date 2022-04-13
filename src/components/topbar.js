import React from 'react';
import { FaLine, FaSistrix, FaHome, FaUsers, FaBell } from 'react-icons/fa';
const topbar = () => {

    return (
        <div className="topbar">
            <div className="topbar_logo">
                <div className="topbar_first_logo">
                    <FaLine className="topbar_logo" />
                </div>
                <div className="topbar_search">
                    <input type="text" className="topbar_searchbar" placeholder="Search" />
                    <FaSistrix className="topbar_searchIcon" />
                </div>
            </div>
            <div className="topbar_middle">
                <span className="middleIcon">
                    <FaHome className="topbar_middle_icons" />
                </span>
                <span className="middleIcon">
                    <FaUsers className="topbar_middle_icons" />
                    <span className="topbar_notify">3</span></span>
            </div>
            <div className="topbar_end">
                <span className="topbar_end_section">
                    <FaBell />
                </span>
            </div>
        </div>
    );
}
export default topbar;
