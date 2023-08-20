import Body from '../elements/Body';
import Box from '../elements/Box';
import Button from '../elements/Button';
import Header from '../elements/Header';
import Input from '../elements/Input';

const LoginPage = () => {
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
            <form className="flex gap-3 items-center">
              <Input type="email" placeholder="Enter your email address" />
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
