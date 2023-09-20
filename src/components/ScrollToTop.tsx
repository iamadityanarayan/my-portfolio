
import {useEffect,ReactNode} from 'react'
import { useLocation } from 'react-router';

type Props = {
  children: ReactNode
}

const ScrollToTop = ({children}: Props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]);
  return (
    <>{children}</>
  )
}

export default ScrollToTop