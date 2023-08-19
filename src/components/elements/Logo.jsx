import { BiAtom } from 'react-icons/bi';
import routerTo from '../../functions/routerTo';

const Logo = () => {
  return (
    <div onClick={() => routerTo('/')}>
      <BiAtom size={'40px'} />
    </div>
  );
};

export default Logo;
