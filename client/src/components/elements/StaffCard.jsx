import { FaLocationDot } from 'react-icons/fa6';

import Box from './Box';

const StaffCard = ({ name, age, gender, address }) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <div>
          <h2 className="font-bold">{name}</h2>
          <p>Added 30 Aug 2023</p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, ipsa
        debitis ipsam praesentium.
      </p>
      <Box className="flex justify-center border-2 border-gray-400 rounded-lg">
        <p>Score 4.5</p>
      </Box>
      <div>
        <FaLocationDot size="20" className="inline-block mx-2" />
        <p className="inline-block">
          {address.street + address.suite + address.city}
        </p>
      </div>
    </div>
  );
};

export default StaffCard;
