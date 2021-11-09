import logo from './logo.svg';
import './App.css';

type Props = {
  test: string;
};

const App = ({ test }: Props) => (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.tsx</code>
        and save to reload.
        {test}
      </p>

      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'>
        Learn React
      </a>
    </header>
  </div>
);

export default App;

/**
 * Follow :
 * https://create-react-app.dev/
 * https://karthickragavendran.medium.com/protect-react-codebase-with-eslint-prettier-typescript-lint-staged-and-husky-9dd549bdb1c
 *
 * For Non-Ts
 * https://dev.to/ankitt8/setting-up-eslint-airbnb-configuration-prettier-and-husky-pre-commit-hooks-in-cra-5dbo
 */
