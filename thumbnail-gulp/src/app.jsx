var React = require('react');
var ReactDOM = require('react-dom');

var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: 'Show Courses',
    number: 12,
    header: 'Learn React',
    description: 'React is a fantastic library for making fast, dynamic pages. React is a fantastic library for making fast, dynamic pages. React is a fantastic library for making fast, dynamic pages. React is a fantastic library for making fast, dynamic pages.',
    imageUrl: 'http://formatjs.io/img/react.svg'
  },
  {
    title: 'Show Courses',
    number: 32,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  }]
};

  var element = React.createElement(ThumbnailList, options);
  ReactDOM.render(element, document.querySelector('.target'));