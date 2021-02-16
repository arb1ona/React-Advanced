import Button from "./Button";
const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="hello" />
      <Button color="blue" text="hallo" />
      <Button color="red" text="pershendetje" />
      <Button color="grey" text="ola" />
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
