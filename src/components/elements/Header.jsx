import Logo from './Logo';
import Button from './Button';

const Header = () => {
  return (
    <nav className="flex shadow-lg h-20 justify-between items-center p-10">
      <Logo />
      <div className="flex justify-between w-44">
        <Button className="text-emerald-800">Login</Button>
        <Button className="bg-emerald-800 text-yellow-50">Signup</Button>
      </div>
    </nav>
  );
};

export default Header;
