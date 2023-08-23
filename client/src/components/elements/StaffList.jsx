import StaffCard from './StaffCard';

const StaffList = ({ list }) => {
  return (
    <div className="flex flex-col gap-3">
      {list.map((x) => (
        <StaffCard {...x} />
      ))}
    </div>
  );
};

export default StaffList;
