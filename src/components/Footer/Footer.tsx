import './footer.css';

const Footer = () => {
  return (
    <div className='footer-section border-top p-2 pt-4 d-flex justify-content-between flex-column flex-lg-row text-center gap-2 pb-5'>
      <div className='text-secondary'>
        Designed and Coded by{' '}
        <a href='https://in.linkedin.com/in/adityanarayan-tiwari-b2b215101' className='text-purple fw-bold'>Adityanarayan Tiwari</a>
      </div>
      <div className='text-secondary'>© 2023 copyright all right reserved</div>
    </div>
  );
};

export default Footer;
