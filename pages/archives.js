import Link from 'next/link';
import {withRouter} from 'next/router';

import MainContainer from 'src/components/MainContainer';

const Archives = props => {
  const archives = props.router.query.archives;

  return (
    <MainContainer>
      <ul>
        {archives &&
          archives.map(archive => {
            return (
              <li key={archive.title}>
                <a href={process.env.PREFIX_PATH + '/' + archive.url}>
                  {archive.title}
                </a>
              </li>
            );
          })}
      </ul>
    </MainContainer>
  );
};

export default withRouter(Archives);
