import {withRouter} from 'next/router';

import MainContainer from 'src/components/MainContainer';

const Post = props => {
  const jsonData = require('content/' + props.router.query.filePath + '.json');
  return (
    <MainContainer>
      <div className="page-post">
        <div dangerouslySetInnerHTML={{__html: jsonData.contents}} />
      </div>
    </MainContainer>
  );
};

export default withRouter(Post);
