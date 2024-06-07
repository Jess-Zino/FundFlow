import Bento from "../../../Components/Bento"
import DialGauge from "../../../Components/Dialguage"
import { Statistic } from 'antd'
import CountUp from 'react-countup';
import { GiftOutlined,TrophyOutlined,ShoppingOutlined,FrownOutlined} from '@ant-design/icons';
import CarouselComp from "../../../Components/SavingPlansCarousel";
const HomePage = () => {
    const formatter = (value) => <CountUp end={value} separator="," />;

  return (
    <div >
       
        <div className="flex flex-row gap-[1%] justify-around">
            <div className="flex flex-col gap-[10px] ">
                <div className="flex flex-row gap-[3%] ">
                    <Bento content={  <Statistic value={6000}  title={"Income"}  prefix={<GiftOutlined /> } precision={2} formatter={formatter} />} size={20}  height={20}/>
                    <Bento content={ <Statistic value={4500}  title={"Expenses"}  prefix={<ShoppingOutlined /> } precision={2} formatter={formatter} />} size={20}  height={20}/>
                </div>
                <div className="flex flex-row gap-[3%]">
                    <Bento content={<Statistic value={2000}  title={"Savings"}  prefix={<TrophyOutlined />} precision={2} formatter={formatter} />} size={20}  height={20}/>
                    <Bento content={ <Statistic value={1000}  title={"Debt"}  prefix={<FrownOutlined />} precision={2} formatter={formatter} />} size={20}  height={20}/>
                </div>
            </div>
           
                <div  className="rounded-xl">
                    
                <CarouselComp/>
                </div>
            </div>
          
    </div>
  )
}

export default HomePage
