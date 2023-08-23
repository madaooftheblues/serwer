import Body from '../elements/Body';
import Box from '../elements/Box';
import Header from '../elements/Header';
import Input from '../elements/Input';
import Label from '../elements/Label';
import Logo from '../elements/Logo';
import StaffCard from '../elements/StaffCard';
import { useState } from 'preact/hooks';
import StaffList from '../elements/StaffList';

const StaffPage = () => {
  function isAlpha(inputString) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(inputString);
  }
  const [searchInput, setSearchInput] = useState('');
  const [staff, setStaff] = useState([]);
  const handleInput = async (e) => {
    setSearchInput(e.target.value);
    if (!isAlpha(searchInput) || searchInput === '') {
      setStaff([]);
      return;
    }
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) return;
    const data = await res.json();
    const filtered = data.filter((obj) =>
      obj.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setStaff(filtered);
    console.log(staff);
  };
  return (
    <>
      <Header />
      <Body className={'flex flex-col items-center'}>
        <Logo size="40" />
        <Box>
          <Label htmlFor={'search'}>Search by name</Label>
          <Input type={'text'} id="search" autoFocus onChange={handleInput} />
        </Box>
        <StaffList list={staff} />
      </Body>
    </>
  );
};

export default StaffPage;
