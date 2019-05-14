import Link from 'next/link';
import {withRouter} from 'next/router';

import MainContainer from 'src/components/MainContainer';

const Archives = props => {
  const archives = props.router.query.archives;

  const getMonthAndDay = dateStr => {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return (
      (month >= 10 ? '' : '0') + month + '-' + (day >= 10 ? '' : '0') + day
    );
  };

  return (
    <MainContainer>
      <div className="page-archives">
        <ul>
          {archives &&
            archives
              .sort((a, b) => {
                return a.date < b.date;
              })
              .map(archive => {
                return (
                  <li key={archive.url}>
                    <span className="date">{getMonthAndDay(archive.date)}</span>
                    <a
                      className="link"
                      href={process.env.PREFIX_PATH + '/' + archive.url}>
                      {archive.title}
                    </a>
                  </li>
                );
              })}
        </ul>
      </div>
    </MainContainer>
  );
};

export default withRouter(Archives);
