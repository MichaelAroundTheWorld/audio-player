import { FC, useState } from 'react';
import { Content } from '../Content/Content';
import { Sidebar } from '../Sidebar/Sidebar';
import styles from './Layout.module.scss';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { SidebarItems } from '../SidebarItems/SidebarItems';

export const Layout: FC = () => {
  return (
    <div className="main">
      <div className="container">
        <Sidebar>
          <SidebarItems />
        </Sidebar>
        <Content>
          <Outlet />
        </Content>
      </div>
      <Footer />
    </div>
  );
};
