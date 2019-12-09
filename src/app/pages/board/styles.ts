import { css } from 'styled-components';
import { AppColor } from '@/core/models/enums/app-color';

export default css`
  min-width: 300px;

  & .form {

    &__error {
      color: ${AppColor.red};
      margin: -15px 0 20px;
    }

    &__input {
      margin-bottom: 20px
    }
  }

  & .filters {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 auto;
    max-width: 960px;
    padding: 20px 10px 10px;
  }

  & .board {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 10px;
    padding: 10px;
    max-width: 960px;
    margin: 0 auto 10px;

    &__not-found {
      grid-column-start: 0;
      grid-column-end: 3;
      text-align: center;
      color: ${AppColor.blue};
      font-weight: bold;
    }
  }

  @media screen and (max-width: 790px) {
    .board__not-found {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`;
