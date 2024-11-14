const NavBar = () => {
  return (
    <nav style={styles.navbar}>
        <h1>My Amazing App</h1>
      </nav>
  )
}

// Inline styles for simplicity
const styles = {  
  navbar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
};

export default NavBar