import React from 'react';

const currentYear= new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer py-4 bg-gray-900 text-white text-center border-t-1 ">
      <div className="footer-text mb-2">
        <p>Copyright &copy; {currentYear} by Josue Ruiz | All Rights Reserved</p>
      </div>
      <div className="footer-iconTop">
        <a href="#"><i className='bx bx-up-arrow-alt text-3xl'></i></a>
      </div>
    </footer>
  );
};

export default Footer;
