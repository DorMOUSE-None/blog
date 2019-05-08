import {withRouter} from 'next/router';

import MainContainer from 'src/components/MainContainer';

const Post = props => {
  const content = props.router.query.content;
  return (
    <MainContainer>
      <div className="page-post">
        <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    </MainContainer>
  );
};

export default withRouter(Post);
