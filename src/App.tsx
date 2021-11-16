import React, { FC } from 'react';
import { Button, DatePicker, Calendar } from 'antd';
// import format from 'dayjs';
// import { DatePicker } from './components';
import './App.less';

const App: FC = () => (
  <div className='App'>
    <Button type='primary'>Button</Button>
    <DatePicker />
    <Calendar />
  </div>
);

export default App;

/**
 * BoilerPlate tools as Follows:
 *
 * CRA: using Ts template
 * https://create-react-app.dev/
 *
 * Eslint, Prettier and Husky integration
 * https://karthickragavendran.medium.com/protect-react-codebase-with-eslint-prettier-typescript-lint-staged-and-husky-9dd549bdb1c
 *
 * For Non-Ts
 * https://dev.to/ankitt8/setting-up-eslint-airbnb-configuration-prettier-and-husky-pre-commit-hooks-in-cra-5dbo
 *
 * Design Tool: Ant Design
 * https://ant.design/docs/react/use-with-create-react-app
 *
 * Default Ant Theme Customization
 * https://ant.design/docs/react/customize-theme
 *
 * Replace Default MomentJS with Dayjs in Antd
 * https://ant.design/docs/react/replace-moment
 *
 */
