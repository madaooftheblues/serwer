import Body from '../elements/Body';
import Button from '../elements/Button';
import Header from '../elements/Header';
const LoginPage = () => {
  return (
    <>
      <Header />
      <Body className="grid grid-cols-2 gap-10">
        <div>
          <h1 className=" text-5xl font-extrabold">Welcome back to Serwer</h1>
          <p className="text-l text-gray-600">
            Log in to your account to get back to your hub
          </p>
          <div>
            <p className="font-bold text-l">Email Address</p>
            <form>
              <input
                type="email"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
                placeholder="Enter your email address"
              />
              <Button className="bg-emerald-800 text-yellow-50">Login</Button>
            </form>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem animi
          harum placeat aperiam porro necessitatibus, tenetur facilis quod nihil
          suscipit praesentium tempore corrupti. Odio molestias sapiente,
          repellat at incidunt neque.
        </div>
      </Body>
    </>
  );
};

export default LoginPage;
