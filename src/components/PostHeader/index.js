import {getDate} from 'src/utils/dateFormat';
import './style.scss';

const PostHeader = props => {
  return (
    <div className="component-post-header">
      <h1 className="title">
        <a href={process.env.PREFIX_PATH + '/' + props.url}>{props.title}</a>
      </h1>
      <div className="date">
        发布于&nbsp;
        <span>{getDate(props.date)}</span>
      </div>
    </div>
  );
};

export default PostHeader;
