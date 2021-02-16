const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <button className="btn">Add</button>
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
