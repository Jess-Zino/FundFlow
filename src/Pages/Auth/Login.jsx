import Lottie from "lottie-react";
import {Link } from 'react-router-dom'
import loginAnimation from '../../images/Animations/Homepage.json'
import { MailOutlined,EyeInvisibleOutlined, EyeTwoTone , LockOutlined } from '@ant-design/icons';
import { Form , Button,Input } from 'antd';
const Login = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
        history.push('/dashboard');
      };
  return (
    <div className=" w-[100vw] h-[100vh] flex flex-row overflow-y-hidden body-font font-normal items-center  text-[#212529]">
        <div className={` clip-rect-to-hex flex-[1.4] loginpage-bg  content-['heloo'] w-[20vw] height-[100vh] flex  bg-[#3b82f6]  `}>
          <Lottie  animationData={loginAnimation}  className="w-[70%] h-[100vh]" />
        </div>
        <div className="flex-[1] flex flex-col gap-24 px-10 pt-5 h-[100vh] bg-white justify-center items-center">
           { /*<div className='flex flex-row justify-between items-center'> 
                <h1 className="main-font text-3xl font-bold text-[#085398]">Fund<span className="text-[#618bb3]">Flow</span> </h1>
                 <p>New User? <Link to="/signup" className="text-[#3b82f6]  font-semibold">Sign Up</Link></p>
            </div>
  */}
            <div className="flex flex-col justify-center gap-14 w-[100%] mx-auto items-center">
                <div className="flex flex-col gap-1 items-center">
                <h1 className="text-3xl font-semibold">Welcome To <span className="text-[#085398] logo">Fund</span><span className="text-[#3b82f6] logo">Flow</span>!</h1>
                <p>Login to continue</p>
                </div>
                
                <div className="flex flex-col gap-6 w-[100%] mx-auto items-center">
                <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout="horizontal"
      className="flex flex-col items-center"
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input className="w-[30vw] border-[#3b82f6] body-font"
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
        <Input.Password className="border-[#3b82f6]"
          prefix={<LockOutlined  className="text-[#3b82f6] body-font"/>}
          size="large"
          placeholder="Password"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined className="text-[#3b82f6]"/>)}
        />
      </Form.Item>

      <Form.Item >
        <div className="flex flex-row gap-4 items-center body-font">
        <Button type="primary" htmlType="submit" size="large" className="loginBtn body-font">
          Login
        </Button>
        <Link to="/forgot-password"  className="text-[#bfbfbf]">Forgot Password?</Link>
        </div>
       
      </Form.Item>
      <p className="body-font">New User? <Link to="/signup" className="text-[#3b82f6]  font-semibold">Sign Up</Link></p>
    </Form>
                </div>
            </div>
           
          
        </div>

    </div>
  )
}

export default Login
