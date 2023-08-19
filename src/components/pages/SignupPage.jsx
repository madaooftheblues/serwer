import Header from '../elements/Header';
import Body from '../elements/Body';
import Box from '../elements/Box';
import Logo from '../elements/Logo';
import Label from '../elements/Label';
import Input from '../elements/Input';
import CnicInput from '../elements/CnicInput';
import PhoneNumberInput from '../elements/PhoneNumberInput';

const SignupPage = () => {
  return (
    <>
      <Header />
      <Body className={'flex flex-col gap-4 items-center'}>
        <Logo />
        <p>Sign up with Serwer </p>
        <Box className="max-w-xl w-full">
          <form className="w-full">
            <Label htmlFor={'email'}>Enter your email</Label>
            <Input id="email" type="email" placeholder="email address" />
            <Label htmlFor={'pass'}>Enter password</Label>
            <Input id="pass" type="password" placeholder="* * * * *" />
            <Label htmlFor={'cpass'}>Confirm password</Label>
            <Input id="cpass" type="password" placeholder="* * * * *" />
            <CnicInput />
            <PhoneNumberInput />
          </form>
        </Box>
      </Body>
    </>
  );
};

export default SignupPage;
