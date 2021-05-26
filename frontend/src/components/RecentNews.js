import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxHeight: 345,
    overflowY: 'scroll',
    backgroundColor: theme.palette.background.paper,
  },

  container: {
    borderColor: 'rgb(0,0,0)',
    boxShadow: '0 0 12px',
    maxWidth: 700,
  },

  Header: {
    background: 'rgb(29, 22, 66)',
  },

  HeaderText: {
    fontSize: 25,
    color: '#fff',
    fontFamily: 'Roboto',
    letterSpacing: 1.1,
    marginTop: 7,
    marginBottom: 7,
  },

  newsText: {
    marginTop: 1,
    marginBottom: 1,
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    fontSize: 17,
    lineHeight: 1.3,
  },
}));

const RecentNews = () => {
  const classes = useStyles();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/main/news/');
        setNews(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchNews();
  }, []);

  const getNews = () => {
    let list = [];

    news.map((News) => {
      const doclink = News.document;
      const extlink = News.link;
      return list.push(
        <div key={News.id}>
          <ListItem className="ListItems">
            <p className={classes.newsText}>
              {News.content}{' '}
              <span>
                {doclink != null && (
                  <Link
                    style={{ textDecoration: 'none', fontSize: 15 }}
                    to={News.document}
                  >
                    {News.file_title}
                  </Link>
                )}
              </span>{' '}
              <span>
                {' '}
                {extlink != null && (
                  <Link
                    style={{ textDecoration: 'none', fontSize: 15 }}
                    to={News.link}
                  >
                    {News.link_title}
                  </Link>
                )}
              </span>
            </p>
          </ListItem>
          <hr width="100%" />
        </div>
      );
    });

    return list;
  };
  return (
    <div className={classes.container}>
      <ListItem className={classes.Header}>
        <h2 className={classes.HeaderText}>Recent News</h2>
      </ListItem>
      <div className={classes.root}>{getNews()}</div>
    </div>
  );
};

export default RecentNews;
