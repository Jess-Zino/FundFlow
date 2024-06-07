import React, { useState } from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined,LogoutOutlined} from '@ant-design/icons';
import { Layout,  theme,Button } from 'antd';
import SideNav from '../../Components/SideNav';
const { Header, Content, Footer, Sider , } = Layout;
const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
   const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout hasSider className='bg-[#004085]'>
      <Sider
        className='overflow-hidden sticky h-[100vh] top-0 left-0 bottom-0 '
        breakpoint="lg"
        collapsedWidth="0"
        collapsible collapsed={collapsed}
      >
      <div className="bg-[#01183c] demo-logo-vertical  flex flex-col justify-between h-[100vh] ">
      <h1 className='text-white text-[20pt] text-center pt-3 main-font'>FundFlow</h1>
      <SideNav className="body-font"/>
      <div className='flex flex-row items-center justify-center p-3 gap-3 text-white font-semibold text-[12pt]' >
      <LogoutOutlined /> Logout
      </div>
      
      </div>
       </Sider>
    <Layout
      style={{
        marginLeft: 10,
        background:"#004085"
      }}
    >
      <Header
        style={{
          padding: 0,
          background: "#01183c",
        }}
      >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
      <Content
        style={{
          margin: '24px 16px 0',
          overflow: 'initial',
          background: "#01183c",
        }}
      >
           
        <div
          style={{
            padding: 24,
            textAlign: 'center',
            background: "#01183c",
            borderRadius: borderRadiusLG,
          }}
        >
          <p>long content</p>
          {
            // indicates very long content
            Array.from(
              {
                length: 100,
              },
              (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ),
            )
          }
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  )
}

export default Dashboard
