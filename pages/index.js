import {withRouter} from 'next/router';

import MainContainer from 'src/components/MainContainer';
import PostDigest from 'src/components/PostDigest';
import PageTurner from 'src/components/PageTurner';
import {genIndexUrl} from 'src/utils/pagedUrl.js';
import markdownStyle from 'static/markdown.scss';

const Index = props => {
  const queryParams = props.router.query;
  const {mdDatasParts, items, pages, currentPage} = queryParams;

  return (
    <MainContainer>
      {mdDatasParts.map(mdData => {
        return <PostDigest key={mdData.url} {...mdData} />;
      })}
      <PageTurner
        currentPage={currentPage}
        pages={pages}
        genPagedUrl={genIndexUrl}
      />
    </MainContainer>
  );
};

export default withRouter(Index);
