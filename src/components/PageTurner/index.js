import './style.scss';

const PageTurner = ({currentPage, pages, genPagedUrl}) => {
  return (
    <div className="component-page-turner">
      <a href={process.env.PREFIX_PATH + genPagedUrl(currentPage - 1)}>
        {currentPage !== 0 && '上一页'}
      </a>
      <a href={process.env.PREFIX_PATH + genPagedUrl(currentPage + 1)}>
        {currentPage !== pages - 1 && '下一页'}
      </a>
    </div>
  );
};

export default PageTurner;
