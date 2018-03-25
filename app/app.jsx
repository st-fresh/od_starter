const React = require('react');
const { render } = require('react-dom');

// router
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;

//deep-dive
const books = [
  { id: 1, title: 'Book 1', price: 1000 },
  { id: 2, title: 'Book 2', price: 2000 },
  { id: 3, title: 'Book 3', price: 3000 },
  { id: 4, title: 'Book 4', price: 4000 }
];

const BookList = ({books}) => {
  return (
    React.createElement("div", {className: "book-list"}, "Books go here")
  );
}

//deep-dive

// redux
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const votes = require('./reducers');

let store = createStore(votes);

/* Import Components */
const HelloWorld = require('./components/HelloWorld');
const About = require('./components/About');

render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HelloWorld}/>
        <Route path="/about" component={About}/>
      </div>
    </BrowserRouter>
  </Provider>), document.getElementById('main'));

render(React.createElement(BookList),
  document.getElementById('react')
);
