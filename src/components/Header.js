import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="./images/logo.png" alt="logo" className="logo" width="50px" height="50px" />
        <div style={{ height: '20px' }}></div>
        <Link to="/Homepage" className="nav-link">Home</Link>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ height: '70px' }}></div>
        <Link to="/products" className="nav-link">Products</Link>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <div style={{ height: '10px' }}></div>
        <span className="company-name">Company Name</span>
        <div style={{ height: '30px' }}></div>
        <Link to="/login" className='nav-link'>Login</Link>
      </div>
    </header>
  );
};

export default Header;