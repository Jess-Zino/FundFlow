import React, { useState } from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined,LogoutOutlined} from '@ant-design/icons';
import { Layout,  theme,Button } from 'antd';
import SideNav from '../../Components/SideNav';
const { Header, Content, Footer, Sider , } = Layout;
const Dashboard = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
   const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout hasSider className='bg-[f5f5f5]'>
      <Sider
        className='overflow-hidden h-[100vh] top-0 left-0 bottom-0 '
        breakpoint="lg"
        collapsedWidth="0"
        collapsible collapsed={collapsed}
        style={
          {
            position:'sticky'
          }
        }
      >
      <div className="bg-[#01183c] demo-logo-vertical  flex flex-col justify-between h-[100vh] ">
          <h1 className='text-white text-[20pt] text-center pt-3 main-font'>FundFlow</h1>
          <SideNav className="body-font"/>
          <div className='flex flex-row items-center justify-center p-3 gap-3 text-white font-semibold text-[12pt]' >
         
          </div>
      </div>
      </Sider>
    <Layout className='ml-[10px] bg-[#f5f5f5]'>
      <Header className='p-0 bg-white'>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined className='text-[#1677ff]' /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className='text-[16px] w-[64] p-[20px] rounded-none'
            style={
            { 
              width: 64,
              height: 64,
              }
            }
          />
        </Header>
      <Content
        style={{
          margin: '24px 16px 0',
          overflow: 'initial',
          background: "white",
        }}
      >
           
        <div
          style={{
            padding: 24,
            textAlign: 'center',
            background: "white",
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
          textAlign: 'right',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  )
}

export default Dashboard
