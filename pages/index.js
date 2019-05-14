import {withRouter} from 'next/router';

import MainContainer from 'src/components/MainContainer';
import PostDigest from 'src/components/PostDigest';
import PageTurner from 'src/components/PageTurner';
import {genIndexUrl} from 'src/utils/pagedUrl.js';

const Index = props => {
  const queryParams = props.router.query;
  const {mdDatasParts, items, pages} = queryParams;

  return (
    <MainContainer>
      {mdDatasParts.map(mdData => {
        return (
          <div>
            <h1>{mdData.title}</h1>
            <PostDigest key={mdData.url} digest={mdData.digest} />
          </div>
        );
      })}
      <PageTurner
        currentPage={mdDatasParts.currentPage}
        pages={mdDatasParts.pages}
        genPagedUrl={genIndexUrl}
      />
    </MainContainer>
  );
};

export default withRouter(Index);
