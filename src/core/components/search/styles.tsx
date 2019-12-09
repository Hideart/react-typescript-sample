import { css } from 'styled-components';
import { AppColor } from '@/core/models/enums/app-color';

import searchIcon from '@/assets/img/search.svg';

export default css`

    position: relative;
    margin-top: 11px;
    margin-top: -2px;

    input {
        width: 100%;
        padding: 8px 17px;
        padding-right: 38px;
        border: none;
        font-size: 14px;
        line-height: 16px;
        color: ${AppColor.grey};
        border-radius: 16px;
        background-color: ${AppColor.white};
        -moz-appearance: textfield;
        transition: border .3s;
        border: 1px solid ${AppColor.blue};

        :focus {
            outline:none;
        }
        ::-moz-focus-inner {
            border:0;
        }

        ::-webkit-inner-spin-button,
        ::-webkit-outer-spin-button {
          -webkit-appearance: none;
        }

        :focus {
            border: 1px solid ${AppColor.blue};
        }

        :not(.placeholder-shown) {
            border: 1px solid ${AppColor.blue};
        }

        :not(.placeholder-shown) + p {
            color: ${AppColor.blueAlternative};
            top: -8px;
            font-size: 12px;
            background-color: ${AppColor.white};
        }
    }


    p {
        position: absolute;
        top: 7px;
        left: 11px;
        padding: 0 5px;
        font-size: 14px;
        line-height: 16px;
        color: ${AppColor.grey};
        transition: all .3s;
        pointer-events: none;
        user-select: none;
        will-change: transform;
    }

    button {
        position: absolute;
        top: 50%;
        right: 22px;
        padding: 0;
        width: 14px;
        height: 14px;
        background-color: transparent;
        background-image: url(${searchIcon});
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        transform: translateY(-50%);
    }
`;
