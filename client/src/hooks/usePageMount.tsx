import { useContext, useEffect } from 'react';

import { UserContext } from 'Context/UserContext';

const usePageMount = (newTitle: string) => {
  const { setCurrentPage } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `recordStore | ${newTitle}`;
    setCurrentPage(window.location.href);
  }, []);
};

export default usePageMount;
