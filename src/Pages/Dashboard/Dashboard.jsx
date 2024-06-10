import { useState } from 'react';
import { Layout } from 'antd';
import SideNav from '../../Components/SideNav';
import DashboardHeader from '../../Components/DashboardHeader';
import PropTypes from 'prop-types'
const { Content, Footer, Sider , } = Layout;
const Dashboard = ({dashContent}) => {
   const [collapsed, setCollapsed] = useState(false);
   const handleCollapse = () =>{
      setCollapsed(!collapsed)
   }
  return (
    <Layout hasSider className='bg-[f5f5f5]'>
      <Sider
        className='overflow-hidden h-[100vh] top-0 left-0 bottom-0 '
        breakpoint="lg"
        collapsedWidth="0"
        collapsible
         collapsed={collapsed}
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
      <DashboardHeader collapse={handleCollapse} iscollapsed={collapsed}/>
      <Content className='mt-[20px] mb-[10px]'>
          {dashContent}
        </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        FundFlow ltd ©{new Date().getFullYear()} Created by Jem
      </Footer>
    </Layout>
  </Layout>
  )
}

export default Dashboard
Dashboard.propTypes ={
  dashContent:PropTypes.element.isRequired,
}