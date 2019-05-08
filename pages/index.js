import {withRouter} from 'next/router';

import MainContainer from 'src/components/MainContainer';
import PostDigest from 'src/components/PostDigest';

const Index = props => {
  const posts = props.router.query.posts;

  return (
    <MainContainer>
      {/*posts.map(post => {
        return <PostDigest post={post} />;
      })*/}
      ffutop's blog
    </MainContainer>
  );
};

export default withRouter(Index);
