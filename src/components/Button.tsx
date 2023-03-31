type Props = {
  onClick: () => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children, onClick, style }) => (
  <button onClick={onClick} style={style}>
    {children}
  </button>
);
