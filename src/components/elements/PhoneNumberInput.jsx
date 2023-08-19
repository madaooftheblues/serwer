import { useState } from 'preact/hooks';
import Label from './Label';
import Input from './Input';

const PhoneNumberInput = ({ value, onChange }) => {
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    const isValid = validatePhoneNumber(newValue);

    if (isValid || newValue === '') {
      onChange(newValue);
      setError('');
    } else {
      setError('Invalid phone number format');
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Regular expression for validating Pakistani phone number format
    const phoneNumberRegex = /^(03\d{2}-\d{7})$/;

    return phoneNumberRegex.test(phoneNumber);
  };

  return (
    <div>
      <Label htmlFor={'phone'}>Phone Number:</Label>
      <Input
        id="phone"
        type="tel"
        value={value}
        onChange={handleInputChange}
        placeholder="03xx-xxxxxxx"
      />
      {error && <div class="text-red-500">{error}</div>}
    </div>
  );
};

export default PhoneNumberInput;
