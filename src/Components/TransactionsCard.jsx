import {  List } from 'antd';
import { GiftOutlined, ShoppingOutlined,FrownOutlined} from '@ant-design/icons';
const data = [
    {
        icon:  <ShoppingOutlined /> ,
        title: 'Expense',
        content:"Category: Food",
        amount: 2000
      },
    {          icon:  <GiftOutlined />,
        title: 'Income',
        content:"Category: Salary",
        amount: 40000
      },
      {
        icon: <ShoppingOutlined /> ,
        title: 'Expense',
        content:"Category: Books",
        amount: 4000
      },
      {
        icon:  <FrownOutlined />,
        title: 'Debt',
        content:"Category: James",
        amount: 400
      },
   
  ];
const TransactionsCard = () => {
  return (
    <div className='w-[95%] body-font'> 
    <List
  
      pagination={{
        position:"bottom",
        align:"center",
        pageSize:2,
        style:{
            fontFamily:'montserrat'
        }
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<p className='text-[15pt]'>{item.icon}</p>}
            title={<p className='body-font font-extrabold'>{item.title}</p>}
            description={<div className='body-font'>
              <p className='font-bold'> {item.content}</p> 
              <p>{item.amount}</p>
            </div>}
          />
        </List.Item>
      )}
    /></div>
  )
}

export default TransactionsCard
