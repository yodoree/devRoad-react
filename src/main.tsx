import ReactDOM from 'react-dom/client';

const App = () => <p>Hello, world</p>;

const element = document.getElementById('root');

if (element) {
  const root = ReactDOM.createRoot(element);
  root.render(<App />);
}
