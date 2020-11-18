import {useEffect} from 'react';
import {useRouter} from 'next/router';

type PropsType = {
  to: string,
  ssr?: boolean
}

const Redirect = ({to, ssr}: PropsType) => {
  const router = useRouter();

  useEffect(() => {
    (ssr) ? window.location.pathname = to : router.push(to);
  }, [])

  return null;
}

export default Redirect;