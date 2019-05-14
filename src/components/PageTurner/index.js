const PageTurner = ({currentPage, pages, genPagedUrl}) => {
  return (
    <div>
      {currentPage !== 0 && <a href={genPagedUrl(currentPage - 1)}>上一页</a>}
      {currentPage !== pages - 1 && (
        <a href={genPagedUrl(currentPage + 1)}>下一页</a>
      )}
    </div>
  );
};

export default PageTurner;
