import { NavLink } from 'react-router-dom';
import colors from '../../common/colors';

interface MenuProps {
  to: string;
  label: string;
}

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

const style = {
  color: colors.BLACK,
  textDecoration: 'none',
  marginRight: '20px',
  padding: '0 4px 2px 4px',
};
