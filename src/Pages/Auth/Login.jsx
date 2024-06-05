import {Link} from 'react-router-dom'
import { MailOutlined,EyeInvisibleOutlined, EyeTwoTone , LockOutlined } from '@ant-design/icons';
import { Form , Button,Input } from 'antd';
const Login = () => {

  return (
    <div className={`flex flex-col w-[100vw] h-[100vh] p-4 loginpage text-white gap-14 body-font`}>
      <nav className="flex flex-row justify-between items-center">
        <div className="logo main-font flex flex-row items-center text-[30px] font-semibold logoDown">
          Fund&nbsp; <span className="logoUp"> Flow</span></div>
        <div className="flex flex-row justify-between items-center gap-4 body-font">
          <Link to="/signup">Sign Up</Link>
          <Link to="/dashboard" className="bg-[#2ecc71] p-[8px] rounded-md">Contact Us</Link>
        </div>
      </nav>
      <div className='flex justify-center items-center flex-col gap-2'>
      <h1 className="text-4xl font-semibold">Welcome Back to FundFlow!</h1>
 
                <p className='text-[16px]'>Ready to dive back into managing your finances? Let&apos;s get started – log in now!</p>
                </div>
                
                <div className="flex flex-col gap-6 w-[100%] mx-auto items-center">
                <Form
      name="login"
      initialValues={{ remember: true }}
      
      layout="horizontal"
      className="flex flex-col items-center"
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input className="w-[30vw] body-font"
          type="email"
          size="large"
          placeholder="Email"
          prefix={<MailOutlined  className="text-[#3b82f6]"/>}
        />
      </Form.Item>

      <Form.Item
      className="w-[30vw] "
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password className=" placeholder:text-[#333]"
          prefix={<LockOutlined  className="text-[#3b82f6] body-font"/>}
          size="large"
          placeholder="Password"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined className="text-[#3b82f6]"/>)}
        />
      </Form.Item>

      <Form.Item >
        <div className="flex flex-row gap-4 items-center body-font">
        <Button type="primary" htmlType="submit" size="large" className="loginBtn body-font bg-[#2ecc71] ">
          Login
        </Button>
        <Link to="/forgot-password"  className="text-[#dad9d9]">Forgot Password?</Link>
        </div>
       
      </Form.Item>
      <p className="body-font text-white">New User? <Link to="/signup" className="text-[#2ecc71]  font-semibold">Sign Up</Link></p>
    </Form>
                </div>
    </div>        
  )
}

export default Login
