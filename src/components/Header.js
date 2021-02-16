import Button from "./Button";
const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

// Header.defaultProps = {
//   title: "Task tracker",
// };
// CSS in JS
// const headerStyle = {
//   color: "red",
//   backgroundColor: 'grey',
// }

export default Header;
