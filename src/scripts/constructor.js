const config = require('src/cfg/global.js');
const {genIndexUrl} = require('src/utils/pagedUrl.js');
/*
 * generate construcor of pages for `exportPathMap`
 * format:
 *  exportPathMap = {
 *    `urlPath`: {
 *      page: `page template in /pages`,
 *      query: `user defined`
 *    }
 *  }
 */

const constructor = mdDatas => {
  return Object.assign(
    constructPageIndex(mdDatas),
    {
      '/about': {page: '/about'},
    },
    constructPageArchives(mdDatas),
    constructPageTags(mdDatas),
    constructPagePost(mdDatas),
  );
};

const constructPageIndex = mdDatas => {
  const mdDatasR = mdDatas.reverse();
  const items = mdDatasR.length;
  const pages = Math.ceil(items / config.itemsPerPage);

  const router = {};

  for (let pageId = 0; pageId < pages; pageId++) {
    router[genIndexUrl(pageId)] = {
      page: '/index',
      query: {
        mdDatasParts: mdDatasR.slice(
          pageId * config.itemsPerPage,
          (pageId + 1) * config.itemsPerPage - 1,
        ),
        items: items,
        pages: pages,
        currentPage: pageId,
      },
    };
  }

  router['/'] = router[genIndexUrl(0)];

  return router;
};

const constructPageTags = markdowns => {
  const allTagsSet = new Set();
  const tagRouters = {};
  markdowns.forEach(markdown => {
    markdown.tags &&
      markdown.tags.forEach(tag => {
        allTagsSet.add(tag);
        if (!tagRouters[tag]) tagRouters[tag] = [];
        tagRouters[tag].push({title: markdown.title, url: markdown.url});
      });
  });

  const tags = [];
  allTagsSet.forEach(tag => {
    tags.push(tag);
  });
  return {
    '/tags': {
      page: '/tags',
      query: {
        tags: tags,
      },
    },
  };
};

const constructPageArchives = markdowns => {
  const archiveParams = [];
  for (let i = 0, length = markdowns.length; i < length; i++) {
    const markdown = markdowns[i];
    archiveParams.push({
      title: markdown.title,
      url: markdown.url,
      date: markdown.date,
    });
  }
  return {
    '/archives': {
      page: '/archives',
      query: {
        archives: archiveParams,
      },
    },
  };
};

const constructPagePost = markdowns => {
  const posts = {};
  for (let i = 0, length = markdowns.length; i < length; i++) {
    const markdown = markdowns[i];
    posts[markdown.url] = {
      page: '/post',
      query: {
        content: markdown.content,
      },
    };
  }
  return posts;
};

module.exports = constructor;
