import PostHeader from 'src/components/PostHeader';

import './style.scss';
import 'static/markdown.scss';

const PostDigest = props => {
  return (
    <div className="component-post-digest">
      <PostHeader {...props}/>
      <div
        className="markdown-content"
        dangerouslySetInnerHTML={{__html: props.digest}}
      />
      <p>
        <a href={process.env.PREFIX_PATH + '/' + props.url}>阅读更多</a>
      </p>
      <hr />
    </div>
  );
};

export default PostDigest;
