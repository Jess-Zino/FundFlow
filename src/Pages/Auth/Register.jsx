import {Link} from 'react-router-dom'
import { MailOutlined,EyeInvisibleOutlined, EyeTwoTone , LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form , Button,Input } from 'antd';
const Register = () => {
  return (
    <div className={`flex flex-col w-[100vw] h-[100vh] p-4 registerpage text-white gap-10 body-font`}>
    <nav className="flex flex-row justify-between items-center">
      <div className="logo main-font flex flex-row items-center text-[30px] font-semibold logoDown">
        Fund&nbsp; <span className="logoUp"> Flow</span></div>
      <div className="flex flex-row justify-between items-center gap-4 body-font">

        <Link to="/">Login</Link>
        <Link to="/contact" className="bg-[#2ecc71] p-[8px] rounded-md">Contact Us</Link>
      </div>
    </nav>
    <div className='flex justify-center items-center flex-col gap-3'>
    <h1 className="text-4xl font-semibold">Welcome to FundFlow!</h1>
              <p className='text-[16px]'>Sign up and take control of your finances like never before</p>
              </div>
              
              <div className="flex flex-col gap-6 w-[100%] mx-auto items-center">
              <Form
    name="login"
    initialValues={{ remember: true }}
    
    layout="horizontal"
    className="flex flex-col items-center"
  >
     <Form.Item
    
      name="First Name"
      rules={[{ required: true, message: 'Please enter your First Name!' }]}
    >
      <Input className="w-[14.5vw] body-font mr-4"
        type="text"
        size="large"
        placeholder="First Name"
        prefix={<UserOutlined  className="text-[#3b82f6]"/>}
      />
       <Input className="w-[14.5vw] body-font"
        type="text"
        size="large"
        placeholder="Last Name"
        prefix={<UserOutlined  className="text-[#3b82f6]"/>}
      />
    </Form.Item>
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
    <Form.Item
  className="w-[30vw]"
  name="confirmPassword"
  dependencies={['password']}
  rules={[
    { required: true, message: 'Please input your Password!' },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('The two passwords that you entered do not match!'));
      },
    }),
  ]}
>
  <Input.Password
    className="placeholder:text-[#333]"
    prefix={<LockOutlined className="text-[#3b82f6] body-font" />}
    size="large"
    placeholder="Confirm Password"
    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined className="text-[#3b82f6]" />)}
  />
</Form.Item>


    <Form.Item >
      <div className="flex flex-row gap-4 items-center body-font">
      <Button type="primary" htmlType="submit" size="large" className="loginBtn body-font bg-[#2ecc71] ">
        Signup
      </Button>
      
      </div>
     
    </Form.Item>
    <p className="body-font text-white">Already have an account? <Link to="/" className="text-[#2ecc71]  font-semibold">Login</Link></p>
  </Form>
              </div>
  </div>    
  )
}

export default Register
