import { Statistic } from 'antd';
import Bento from '../../../Components/Bento'
import CountUp from 'react-countup';
import {PlusOutlined, MinusOutlined, EditOutlined, UnorderedListOutlined} from '@ant-design/icons';
import LineChart from '../../../Components/LineChart';
import BarChart from '../../../Components/BarChart';
const Income = () => {
    const mayIncome = 30000;
    const juneIncome = 40000;
    const formatter = (value) => <CountUp end={value} separator="," />;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div className="flex flex-col gap-[10px] ">
       <div className='flex flex-row gap-[10px] '>
        <div className='flex flex-col gap-[15px]'>
        <Bento content={<div>
                <Statistic  className="flex items-center flex-col" value={mayIncome}  title={<h1 className="text-[#43C643] main-font text-[13pt]">Total Income ({months[new Date().getMonth()-1] })</h1>}   precision={2} formatter={formatter} />
            </div>} size={25} height={23}/>
        <Bento content={<div>
                <Statistic  className="flex items-center flex-col" value={juneIncome}  title={<h1 className="text-[#43C643] main-font text-[13pt]">Total Income ({months[new Date().getMonth()] })</h1>}   precision={2} formatter={formatter} />
            </div>} size={25} height={23}/>
           
        </div>
        <Bento content={ <LineChart/>} size={56} height={48.5} />
        
        

        </div>
       <div className='flex flex-row gap-[10px]'>
       <Bento content={<BarChart/>} size={60} height={48.5}/>
        <div className='grid grid-cols-2 gap-[10px]'>
        <Bento content={<div className='flex flex-col items-center justify-center gap-4'><PlusOutlined /><h2>Add Income</h2></div>} size={10}/>
            <Bento content={<div className='flex flex-col items-center justify-center gap-4'><MinusOutlined /><h2>Delete Income</h2></div>} size={10}/>
            <Bento content={<div className='flex flex-col items-center justify-center gap-4'><EditOutlined /><h2>Edit an Income</h2></div>} size={10}/>
            <Bento content={<div className='flex flex-col items-center justify-center gap-4'><UnorderedListOutlined /><h2> Categories</h2></div>} size={10}/>
        </div>
        

       </div>
    </div>
  )
}

export default Income
