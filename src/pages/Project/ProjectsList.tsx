import { Card, Col, Row } from 'react-bootstrap';
import { ProjectsDataTypes } from '../../types/Project';

type Props = {
  data: ProjectsDataTypes[];
};

const ProjectsList = ({ data }: Props) => {
  return (
    <Row className=''>
      {data?.map((p, _) => (
        <Col xs={12} md={6} lg={4} className='mb-3' key={_}>
          <a
            href={p.link}
            className='card-link text-decoration-none'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Card className='rounded-4 position-relative overflow-hidden'>
              <Card.Img
                loading='lazy'
                className='rounded-4 img-thumbnail border-purple _card-image'
                variant='top'
                src={p.imageSRC}
              />
              <Card.Body className='rounded-5 position-absolute top-50 start-50 translate-middle bg-transparent text-white onhover p-0'>
                <Card.Title className=' position-absolute0 mb-0 bg-transparent'>
                  {p.imageTitle}
                </Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectsList;
