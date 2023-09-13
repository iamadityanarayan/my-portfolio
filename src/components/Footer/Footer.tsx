import './footer.css';

const Footer = () => {
  return (
    <div className='footer-section border-top p-2 pt-4 d-flex justify-content-between flex-column flex-lg-row text-center gap-2 pb-5'>
      <div className='text-secondary'>
        Designed and Coded by{' '}
        <span className='text-purple fw-bold'>Adityanarayan Tiwari</span>
      </div>
      <div className='text-secondary'>© 2023 copyright all right reserved</div>
    </div>
  );
};

export default Footer;
