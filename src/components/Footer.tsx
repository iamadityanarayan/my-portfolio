// import React from 'react'

import { Container, Stack } from "react-bootstrap";

// type Props = {}

const Footer = () => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <Container fluid className='px-0'>
        <Stack className='border-top border-secondary flex-column mx-auto justify-content-center py-4' >
          <div className="p-2">
            <Stack direction="horizontal" className="mx-auto gap-5 justify-content-center" >
              <div className=" fs text-light-secondary">LinkedIn</div>
              <div className=" fs text-light-secondary">GitHub</div>
              <div className=" fs text-light-secondary">Instagram</div>
            </Stack>
          </div>
          <div className="p-2 text-light-secondary mx-auto ms-md-auto">© 2023 copyright all right reserved</div>
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;
