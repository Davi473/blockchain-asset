import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <div style={styles.logo}>MyApp</div>
        <ul style={styles.menu}>
          <li>Home</li>
          <li>Add</li>
          <li>Chart</li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '16px 0',
  },
  inner: {
    maxWidth: '60%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  menu: {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    cursor: 'pointer',
  },
};

export default Navbar;
