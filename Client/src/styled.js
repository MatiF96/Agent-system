import { css } from 'styled-components';

const reset = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #e6e6e6;
    color: #f1f1f1;
    width: 100%;
  }

  a {
    text-decoration: inherit;
    color: inherit;
  }
`;

export default reset;