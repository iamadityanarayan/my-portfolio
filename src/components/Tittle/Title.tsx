

type Props = {
  title: string;
  className?: string;
}

const Title = ({title, className}: Props) => {
  return (
    <h2 className={`title text-start py-4 ${className}`}>{title}</h2>
  )
}

export default Title