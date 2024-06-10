import { Carousel } from 'antd';
import Bento from './Bento';
import DialGauge from './Dialguage';


const SavingPlansCarousel = () => {
  return (
   <Bento className="flex flex-row justify-center items-center" size={39} height={41.5} content={
    <Carousel arrows autoplay autoplaySpeed={4000}  effect="fade" className='text-center rounded-xl p-0 flex flex-col items-center  '
    style={{width:'27vw', height:'36vh'}}
   >
      <div className='flex flex-col items-center justify-center gap-8 ml-5'>
        <h1 className='text-[14pt] text-center mr-[40px]'>Savings Goal1</h1>
        <DialGauge  maxValue={1000} value={200}/>
      </div>
      <div className='flex flex-col items-center justify-center gap-8 ml-5'>
        <h1 className='text-[14pt] text-center mr-[40px]'>Savings Goal 2</h1>
        <DialGauge  maxValue={1000} value={500}/>
      </div>
      <div className='flex flex-col items-center justify-center gap-8 ml-5'>
        <h1 className='text-[14pt] text-center mr-[40px]'>Savings Goal 3</h1>
        <DialGauge  maxValue={1000} value={900}/>
      </div>
      <div className='flex flex-col items-center justify-center gap-8 ml-5'>
        <h1 className='text-[14pt] text-center mr-[40px]'>Savings Goal 4</h1>
        <DialGauge  maxValue={1000} value={400}/>
      </div>
    </Carousel>
   }/>
  )
}

export default SavingPlansCarousel

