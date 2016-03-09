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

  // Ask react to render this class
  var element = React.createElement(ThumbnailList, options);

  // When we ask react to render this class, we will tell it where to place the rendered
  // element in the dom
  ReactDOM.render(element, document.querySelector('.target'));