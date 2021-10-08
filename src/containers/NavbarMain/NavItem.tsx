import { Link } from "react-scroll";

type Props = {
  to: string;
  value: string;
  className?: string;
};

export default function NavItem({ to, value, className }: Props) {
  return (
    <Link
      activeClass="active"
      className={className}
      to={to}
      spy={true}
      smooth={false}
      duration={500}
    >
      {value}
    </Link>
  );
}
