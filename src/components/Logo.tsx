type LogoProps = {
  handleClick: (event: React.MouseEvent<HTMLDivElement>, id: number) => void;
};

export const Logo = (props: LogoProps) => {
  return (
    <div>
      <div onClick={(event) => props.handleClick(event, 1)}>
        <p>DOMIGUNO</p>
        <hr />
      </div>
    </div>
  );
};
