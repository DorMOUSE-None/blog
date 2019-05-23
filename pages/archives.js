import Link from 'next/link';
import {withRouter} from 'next/router';

import MainContainer from 'src/components/MainContainer';
import {getMonthAndDay, getYear, getDate} from 'src/utils/dateFormat';
import 'static/styles.scss';

const Archives = props => {
  const archives = props.router.query.archives;

  const isExist = {};
  const isYearNotExist = dateStr => {
    const year = getYear(dateStr);
    if (isExist[year] !== true) {
      isExist[year] = true;
      return true;
    }
    return false;
  };

  return (
    <MainContainer>
      <div className="page-archives">
        <ul>
          {archives &&
            archives.map(archive => {
              return (
                <>
                  {isYearNotExist(archive.date) && (
                    <div>{getYear(archive.date)}</div>
                  )}
                  <li key={archive.url}>
                    <span className="date">{getDate(archive.date)}</span>
                    <a
                      className="link"
                      href={process.env.PREFIX_PATH + '/' + archive.url}>
                      {archive.title}
                    </a>
                  </li>
                </>
              );
            })}
        </ul>
      </div>
    </MainContainer>
  );
};

export default withRouter(Archives);
