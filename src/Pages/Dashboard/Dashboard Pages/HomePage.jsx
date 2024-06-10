import Bento from "../../../Components/Bento"
import { Statistic } from 'antd'
import CountUp from 'react-countup';
import { GiftOutlined,TrophyOutlined,ShoppingOutlined,FrownOutlined} from '@ant-design/icons';
import SavingPlansCarousel from "../../../Components/SavingPlansCarousel";
import LineChart from "../../../Components/LineChart";
import TransactionsCard from "../../../Components/TransactionsCard";
const HomePage = () => {
    const formatter = (value) => <CountUp end={value} separator="," />;

  return (
    <div className="flex flex-col gap-[10px]" >
       
        <div className="flex flex-row  gap-[10px] justify-stretch pl-[10px]">
            <div className="flex flex-col gap-[10px] ">
                <div className="flex flex-row gap-[10px] ">
                    <Bento content={  <Statistic  className="flex items-center flex-col" value={6000}  title={<h1 className="text-[#43C643] main-font text-[13pt]">Income</h1>}  prefix={<GiftOutlined /> } precision={2} formatter={formatter} />} size={20}  height={20}/>
                    <Bento content={ <Statistic  className="flex items-center flex-col" value={4500}  title={<h1 className="text-[#FB4141] main-font text-[13pt]">Expenses</h1>}  prefix={<ShoppingOutlined /> } precision={2} formatter={formatter} />} size={20}  height={20}/>
                </div>
                <div className="flex flex-row gap-[10px]">
                    <Bento content={<Statistic className="flex items-center flex-col" value={2000}  title={<h1 className="text-[#0047AB] main-font text-[13pt]">Savings</h1>}  prefix={<TrophyOutlined />} precision={2} formatter={formatter} />} size={20}  height={20}/>
                    <Bento content={ <Statistic  className="flex items-center flex-col" value={1000}  title={<h1 className="text-[#ffa500] main-font text-[13pt]">Debt</h1>}  prefix={<FrownOutlined />} precision={2} formatter={formatter} />} size={20}  height={20}/>
                </div>
            </div>
            <div>
                <SavingPlansCarousel/>
            </div>
            </div>
            <div className="flex fle-row gap-[10px] pl-[10px]">
                <Bento size={55}  height={60} content={<LineChart/>}/>
               <Bento  size={25} height={60} content={<TransactionsCard/>}/>
            </div>
           { /*<div>
               
                <Bento size={40} height={40} content={ <div> <h2>Debt Status</h2><DialGauge  maxValue={1000} value={200}/></div>}/>
  </div>*/}
    </div>
  )
}

export default HomePage
