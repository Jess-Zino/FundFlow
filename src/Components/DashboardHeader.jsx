import {useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { Layout, Button, Badge, Avatar } from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined,  BellOutlined, SettingOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types'
const { Header } = Layout;
const DashboardHeader = ({collapse, iscollapsed}) => {
    const location = useLocation()
    const currentPath = location.pathname;
    const dashName = (str)=>{
      const newstr = str.slice(1, str.length)
      return newstr[0].toUpperCase() + newstr.slice(1)
    }
  return (
    <Header className='p-0 bg-white flex flex-row justify-between pr-6'>
        <div className='flex flex-row items-center'>
        <Button
            type="text"
            icon={iscollapsed ? <MenuUnfoldOutlined className='text-[#01183c]' /> : <MenuFoldOutlined />}
            onClick={collapse}
            className='text-[16px] w-[64] p-[20px] rounded-none'
            style={
            { 
              width: 64,
              height: 64,
              }
            }
          />
        
            <h1 className='text-[24px] font-bold '>{dashName(currentPath)}</h1>
        </div>
         
            <div className='flex flex-row justify-between gap-5 items-center'>
            <Link to='/settings'>
            <SettingOutlined className='text-[#01183c] text-[19px]'/>
            </Link>
            <Link to='/notifications'>
            <Badge  count={2} className='text-[#1677ff]' size='small'>
           
            <BellOutlined className='text-[#01183c] text-[19px] ' />
            
            </Badge>
            </Link>
            <Badge dot>
    
            <Avatar shape='square' size={{ xs: 30, sm: 30, md: 30, lg: 30, xl: 30, xxl: 40 }} style={{ backgroundColor: '#01183c', color: 'white' }}>JA</Avatar>
            </Badge>
            </div>
        </Header>
  )
}

export default DashboardHeader
DashboardHeader.propTypes ={
    collapse: PropTypes.func.isRequired,
    iscollapsed: PropTypes.bool.isRequired,
}