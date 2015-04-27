var feed = require('feed-read');
var _ = require('lodash');
var moment = require('moment');

feed("http://www.uefa.com/rssfeed/uefachampionsleague/rss.xml", function(err, articles) {
  if (err) throw err;

  _.forEach(articles, function (article) {
    // console.log(article);
    console.log(article.title, moment(article.published).fromNow());
  });

  // Each article has the following properties:
  // 
  //   * "title"     - The article title (String).
  //   * "author"    - The author's name (String).
  //   * "link"      - The original article link (String).
  //   * "content"   - The HTML content of the article (String).
  //   * "published" - The date that the article was published (Date).
  //   * "feed"      - {name, source, link}
  // 
});