import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const location = useLocation();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('signupData'));
    if (storedData) {
      setIsLoggedIn(true);
      setUserName(storedData.firstName);
    }
  }, []);

  const handleDropdown = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleSignOut = () => {
    localStorage.removeItem('signupData');
    setIsLoggedIn(false);
    setUserName('');
  };

  if (location.pathname === '/Signup' || location.pathname === '/Login') {
    return null;
  }

  return (
    <div>
      <div className="bg-gray-200 flex justify-between items-center px-4 py-2 text-sm">
        <div className="flex space-x-4">
          <Link to='/Support'><div>Support</div></Link>
          <Link to='/About'><div>About Us</div></Link>
          <Link to='/Careers'><div>Careers</div></Link>

          <Link to='/Update-KYC'><div className="bg-orange-400 px-2 py-1 rounded text-white">Update KYC</div></Link>
        </div>
      </div>

      <div className="bg-blue-500 flex justify-between items-center px-4 py-4 mt-2 text-white text-lg relative">
        <div className="flex items-center space-x-2">
          <img src="bajaj.png" alt="Logo" className="h-8" />
          <div>Bajaj Insurance</div>
        </div>






        <div className="flex space-x-4 items-center relative">
          <div
            onMouseEnter={() => handleDropdown('insure')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="focus:outline-none">
           <Link to= "insure " > <div>Insure</div> </Link>   
            </button>
            {activeDropdown === 'insure' && (




              <div
                className="absolute left-0 top-full bg-white shadow-lg mt-2 rounded-lg z-50"
                onMouseEnter={() => handleDropdown('insure')}
                onMouseLeave={handleMouseLeave}
              >
                <Link to='/ihealth'><div className="px-4 py-2 text-black hover:bg-gray-200">Health Insurance</div></Link>
                <Link to='/imotor'><div className="px-4 py-2 text-black hover:bg-gray-200">Motor Insurance</div></Link>
              </div>



)}




          </div>



          <Link to='/Claim'><div>Claim</div></Link>
          <Link to='/Government'><div>Government Schemes</div></Link>
          <Link to='/insanjo'><div>Insurance Samjho</div></Link>
        </div>

        <div className="flex space-x-4 items-center">
          {isLoggedIn ? (
            <div className="relative">
              <button onClick={() => handleDropdown('user')} className="focus:outline-none">
                <div>{userName}</div>
              </button>
              {activeDropdown === 'user' && (
                <div className="absolute right-0 top-full bg-white shadow-lg mt-2 rounded-lg z-50">
                  <div className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer" onClick={handleSignOut}>Sign Out</div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to='/Login'><div>Login</div></Link>
              <Link to='/Signup'><div>Signup</div></Link>
            </>
          )}
          <i className="fas fa-search"></i>
          <i className="fas fa-phone"></i>
        </div>
      </div>
    </div>
  );
};


export default Header;




