export interface props {
  id: string;
  targetMenuID: string;
}

const NavbarButton = ({ id, targetMenuID }: props) => {
  return (
    <button
      id={id}
      aria-controls={targetMenuID}
      aria-label="Toggle menu"
      aria-expanded="false"
    >
      OPEN
    </button>
  );
};

export default NavbarButton;
