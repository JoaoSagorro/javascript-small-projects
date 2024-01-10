// We can use External Styling (using a className and CSS properties)
// Or we can use Modules (creating folders for each component com avoid naming problems)

function Button() {

  // This is inline styling, good for small components
  const styles = {
      backgroundColor: "hsl(200, 100%, 50%)",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    }

  return(
    <button style={styles}>Click me!</button>
  );
}

export default Button
