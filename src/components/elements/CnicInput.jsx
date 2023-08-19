import { useState } from 'preact/hooks';
import Label from './Label';
import Input from './Input';

const CnicInput = ({ value, onChange }) => {
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    const isValid = validateCnic(newValue);

    if (isValid || newValue === '') {
      onChange(newValue);
      setError('');
    } else {
      setError('Invalid CNIC format');
    }
  };

  const validateCnic = (cnic) => {
    // Regular expression for validating Pakistani CNIC format
    const cnicRegex = /^[0-9]{5}-[0-9]{7}-[0-9]$/;

    return cnicRegex.test(cnic);
  };

  return (
    <div>
      <Label htmlFor={'cnic'}>
        Please Enter CNIC without dashes e.g: 4123456222222
      </Label>
      <Input
        id="cnic"
        type="text"
        value={value}
        onChange={handleInputChange}
        minLength={13}
        maxLength={13}
        placeholder={'CNIC'}
      />
      {error && <div class="text-red-500">{error}</div>}
    </div>
  );
};

export default CnicInput;
