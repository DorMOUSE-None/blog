import {withRouter} from 'next/router';

import MainContainer from 'src/components/MainContainer';

const Tags = props => {
  return (
    <MainContainer>
      <ul>
        {props.router.query.tags.map(tag => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
    </MainContainer>
  );
};

export default withRouter(Tags);
