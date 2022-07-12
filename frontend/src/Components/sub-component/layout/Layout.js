import React from "react";
import Sidebar from "../../slidebar/Sidebar";
import { SLayout, SMain } from "../../../styles/sub-component/layout/Layout.styles";

const Layout = ({ children }) => {
    return (
        <SLayout>
            <Sidebar />
            <SMain>{children}</SMain>
        </SLayout>
    );
};

export default Layout;
