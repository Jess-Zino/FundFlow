import Bento from "../../../Components/Bento"
import DialGauge from "../../../Components/Dialguage"
const HomePage = () => {
  return (
    <div >
        <div className="flex flex-row gap-[1%]">
            <div className="flex flex-col gap-[10px]">
                <div className="flex flex-row gap-[3%]">
                    <Bento content={<div className="flex flex-col items-center  justify-center gap-2"><h1 className="text-[20pt]">23673</h1> <h2 className="text-[13pt]">Income</h2></div>} size={20}  height={20}/>
                    <Bento content={<div className="flex flex-col items-center  justify-center gap-2"><h1 className="text-[20pt]">2793</h1> <h2 className="text-[13pt]">Expenses</h2></div>} size={20}  height={20}/>
                </div>
                <div className="flex flex-row gap-[3%]">
                    <Bento content={<div className="flex flex-col items-center  justify-center gap-2"><h1 className="text-[20pt]">5000</h1> <h2 className="text-[13pt]">Savings</h2></div>} size={20}  height={20}/>
                    <Bento content={<div className="flex flex-col items-center  justify-center gap-2"><h1 className="text-[20pt]">800</h1> <h2 className="text-[13pt]">Debt</h2></div>} size={20}  height={20}/>
                </div>
            </div>
           
                <div>
                    
                    <Bento size={42.8} height={41.5} content={<div><h1>Savings Goals</h1><DialGauge  maxValue={1000} value={800}/></div>}/>
                </div>
            </div>
    </div>
  )
}

export default HomePage
