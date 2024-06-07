import {useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import {UserOutlined,
    GiftOutlined,
    ShoppingOutlined,
TrophyOutlined,
FrownOutlined,
  HomeOutlined,
  WalletOutlined,
  ProjectOutlined,
  SolutionOutlined,
  CalendarOutlined,
  TeamOutlined,
  FileTextOutlined,
  BellOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  } from '@ant-design/icons';
import { Menu } from 'antd';
const SideNav = () => {
    const navigate =  useNavigate()
    const location = useLocation()
    //const currentPath = location.pathname;
    const dashName = (str)=>{
      const newstr = str.slice(1, str.length)
      return newstr[0].toUpperCase() + newstr.slice(1)
    }
   
 
    const icons = [
      { key: '1', icon: <HomeOutlined />, label: 'Dashboard' },
      { key: '2', icon: <GiftOutlined />, label: 'Income' },
      { key: '3', icon: <ShoppingOutlined />, label: 'Expenses' },
      { key: '4', icon: <TrophyOutlined />, label: 'Savings' },
      { key: '5', icon: <FrownOutlined />, label: 'Debt' },
      { key: '6', icon:<WalletOutlined />, label: 'Budgets' },
      { key: '7', icon: <FileTextOutlined />, label: 'Reports' },
      { key: '8', icon: <BellOutlined />, label: 'Notifications' },
      { key: '9', icon: <SettingOutlined />, label: 'Settings' },
      { key: '10', icon: <QuestionCircleOutlined />, label: 'Help' },
      { key: '11', icon: <UserOutlined />, label: 'Profile' },
    
    ];
    const items = icons.map((item) => ({
        key: `/${item.label.toLowerCase()}`,
        icon: item.icon, // Accessing the icons array directly
        label: <span className='text-white body-font'>{item.label}</span>,
      }));
  return (
    <div>
      <Menu className=" bg-[#01183c] text-white"   mode="vertical" defaultSelectedKeys={['2']} items={items}   onClick={(item)=>{
            navigate(item.key)
        }}  theme='dark'/>      
    </div>
  )
}

export default SideNav
