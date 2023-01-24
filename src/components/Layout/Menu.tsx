import { NavLink } from 'react-router-dom';
import { BLACK_COLOR } from '../../common/colors';

interface MenuProps {
  to: string;
  label: string;
}

const style = {
  color: BLACK_COLOR,
  textDecoration: 'none',
  marginRight: '20px',
  padding: '0 4px 2px 4px',
};

export default function Menu({ to, label }: MenuProps) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) =>
        isActive
          ? {
              ...style,
              borderBottom: '1px solid black',
            }
          : { ...style }
      }
    >
      {label}
    </NavLink>
  );
}
