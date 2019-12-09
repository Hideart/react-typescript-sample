import { css } from 'styled-components';
import { AppColor } from '@/core/models/enums/app-color';

export default css`
  .cell {
    position: relative;
    background-color: white;
    border: 1px solid ${AppColor.blue};
    border-radius: 10px;
    padding: 20px;
    cursor: grab;

    &.draggable {
      position: fixed;
      border: none;
      background: linear-gradient(135deg, rgba(21,125,241,1) 0%, rgba(73,149,241,1) 100%);
      box-shadow: 0 5px 25px rgba(73,149,241,0.6);
      cursor: inherit;
      z-index: 2;
      width: 300px;

      & * {
        color: ${AppColor.white};
      }
    }

    &.droppable {
      border: none;
      background-color: ${AppColor.contrastGrey};
      cursor: inherit;
      z-index: 1;

      & * {
        color: ${AppColor.black};
      }
    }

    &__controls {
      position: absolute;
      top: 10px;
      right: 10px;

      &-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }

    &__data-row {
      margin: 10px 0;

      &-title {
        color: ${AppColor.blue};
        font-weight: bold;
        word-wrap: break-word;
        white-space: normal;
      }

      &-value {
        color: ${AppColor.black};
        word-wrap: break-word;
        white-space: normal;
      }
    }
  }
`;
