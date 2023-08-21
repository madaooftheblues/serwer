import Body from '../elements/Body';
import Box from '../elements/Box';
import Button from '../elements/Button';
import Header from '../elements/Header';
import Input from '../elements/Input';
import { useState } from 'preact/hooks';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email } = formData;
    const res = await fetch(`http://localhost:3000/emails`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    });
    if (!res.ok) {
      console.log('invalid');
      return;
    }
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <Header />
      <Body className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="overflow-hidden">
          <h1 className=" text-5xl font-extrabold">Welcome back to Serwer</h1>
          <p className="text-l text-gray-600 my-5">
            Log in to your account to get back to your hub
          </p>
          <div>
            <p className="font-bold text-l">Email Address</p>
            <form className="flex gap-3 items-center" onSubmit={onSubmit}>
              <Input
                type="email"
                placeholder="Enter your email address"
                name="email"
                onChange={handleInputChange}
                required
              />
              <Button className="bg-emerald-800 text-yellow-50">Login</Button>
            </form>
          </div>
        </div>
        <Box>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem animi
            harum placeat aperiam porro necessitatibus, tenetur facilis quod
            nihil suscipit praesentium tempore corrupti. Odio molestias
            sapiente, repellat at incidunt neque.
          </p>
        </Box>
      </Body>
    </>
  );
};

export default LoginPage;
