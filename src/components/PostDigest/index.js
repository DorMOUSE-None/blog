const PostDigest = props => {
  return <div dangerouslySetInnerHTML={{__html: props.digest}} />;
};

export default PostDigest;
