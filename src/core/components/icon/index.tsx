import { AppColor } from '@/core/models/enums/app-color';
import React from 'react';
/* tslint:disable: max-line-length */

export const PlusIcon = ({color = AppColor.white, width = 12, height = 12} = {}) => (
  <svg width={width} height={height} viewBox='0 0 12 12' fill={color} xmlns='http://www.w3.org/2000/svg'>
    <path d='M7.35329 0H4.64671V4.69355H0V7.30645H4.64671V12H7.35329V7.30645H12V4.69355H7.35329V0Z' fill={color} />
    </svg>
);

export const CheckIcon = ({color = AppColor.white, width = 14, height = 11} = {}) => (
    <svg width={width} height={height} viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M4.92917 11L0 5.91848L1.63333 4.24456L4.92917 7.62228L12.3667 0L14 1.7038L4.92917 11Z' fill={color} />
    </svg>
);
export const EditIcon = ({color = AppColor.blue, width = 20, height = 20} = {}) => (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M1 17H19' stroke={color} strokeWidth='2'/>
        <path d='M5 10V13H8L15 6L12 3L5 10Z' stroke={color} strokeWidth='2'/>
    </svg>
);
export const SortIcon = ({color = AppColor.white, width = 15, height = 10} = {}) => (
    <svg width={width} height={height} viewBox='0 0 15 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M10.0003 8.33331H5.00033C4.54199 8.33331 4.16699 8.70831 4.16699 9.16665C4.16699 9.62498 4.54199 9.99998 5.00033 9.99998H10.0003C10.4587 9.99998 10.8337 9.62498 10.8337 9.16665C10.8337 8.70831 10.4587 8.33331 10.0003 8.33331Z' fill={color} />
        <path d='M11.6667 4.16669H3.33333C2.875 4.16669 2.5 4.54169 2.5 5.00002C2.5 5.45835 2.875 5.83335 3.33333 5.83335H11.6667C12.125 5.83335 12.5 5.45835 12.5 5.00002C12.5 4.54169 12.125 4.16669 11.6667 4.16669Z' fill={color}/>
        <path d='M0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667Z' fill={color}/>
    </svg>
);
export const ExportIcon = ({color = AppColor.white, width = 13, height = 16} = {}) => (
    <svg width={width} height={height} viewBox='0 0 13 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M1.42335 9.65398L5.44585 5.63148V14.646C5.44585 15.0998 5.81716 15.4711 6.27098 15.4711C6.7248 15.4711 7.09611 15.0998 7.09611 14.646V5.63148L11.1186 9.65398C11.2836 9.81901 11.4899 9.90152 11.6962 9.90152C11.9025 9.90152 12.1088 9.81901 12.2738 9.65398C12.6038 9.32393 12.6038 8.80822 12.2738 8.47817L7.98312 4.1875C7.03422 3.23861 5.48711 3.23861 4.55884 4.1875L0.247539 8.4988C-0.0825129 8.82885 -0.0825129 9.34456 0.247539 9.67461C0.57759 9.98403 1.0933 9.98403 1.42335 9.65398Z' fill={color}/>
        <path d='M2.35247 1.65026H10.1912C10.645 1.65026 11.0163 1.27895 11.0163 0.825129C11.0163 0.371308 10.645 0 10.1912 0H2.35247C1.89865 0 1.52734 0.371308 1.52734 0.825129C1.52734 1.27895 1.89865 1.65026 2.35247 1.65026Z' fill={color}/>
    </svg>
);
export const UnlockIcon = ({color = AppColor.blue, width = 18, height = 24} = {}) => (
    <svg width={width} height={height} viewBox='0 0 18 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12.375 9H13.375V8V5.71429C13.375 4.54479 12.9178 3.42009 12.0991 2.5884L11.3865 3.28992L12.0991 2.5884C11.2799 1.75618 10.1654 1.28571 9 1.28571C7.83455 1.28571 6.72008 1.75618 5.90086 2.5884C5.31957 3.17893 4.92053 3.91717 4.73799 4.71429H4.48023C4.66782 3.8335 5.10077 3.01967 5.73518 2.37519C6.60379 1.49279 7.7785 1 9 1C9.60516 1 10.2048 1.12107 10.7647 1.3567L11.1526 0.434974L10.7647 1.3567C11.3248 1.59234 11.8346 1.93816 12.2648 2.37519C12.6951 2.81226 13.0372 3.33198 13.2708 3.90509C13.5045 4.47822 13.625 5.09303 13.625 5.71429V8V9H14.625H15.75C16.0764 9 16.3927 9.13157 16.6283 9.37099C16.8645 9.61094 17 9.93968 17 10.2857V21.7143C17 22.0603 16.8645 22.3891 16.6283 22.629C16.3927 22.8684 16.0764 23 15.75 23H2.25C1.57155 23 1 22.4373 1 21.7143V10.2857C1 9.93968 1.13546 9.61094 1.37166 9.37099C1.60734 9.13157 1.92361 9 2.25 9H12.375ZM9 19.2857C9.86708 19.2857 10.6954 18.9357 11.3036 18.3178C11.9114 17.7004 12.25 16.8664 12.25 16C12.25 15.1336 11.9114 14.2996 11.3036 13.6822C10.6954 13.0643 9.86708 12.7143 9 12.7143C8.13292 12.7143 7.30459 13.0643 6.69636 13.6822C6.08865 14.2996 5.75 15.1336 5.75 16C5.75 16.8664 6.08865 17.7004 6.69636 18.3178L7.38079 17.644L6.69636 18.3178C7.30459 18.9357 8.13292 19.2857 9 19.2857Z' stroke={color} strokeWidth='2'/>
    </svg>
);

export const LockIcon = ({color = AppColor.blue, width = 19, height = 25} = {}) => (
    <svg width={width} height={height} viewBox='0 0 19 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M3.5625 9.33333H4.5625V8.33333V5.95238C4.5625 4.63812 5.08331 3.37819 6.00954 2.44963C6.9357 1.52116 8.1913 1 9.5 1C10.1481 1 10.7898 1.12796 11.3887 1.37664C11.9875 1.62532 12.5319 1.98988 12.9905 2.44963C13.4491 2.90939 13.813 3.45534 14.0613 4.05637C14.3097 4.6574 14.4375 5.30168 14.4375 5.95238V8.33333V9.33333H15.4375H16.625C16.9889 9.33333 17.3383 9.47822 17.5964 9.73692C17.8545 9.99571 18 10.3472 18 10.7143V22.619C18 22.9861 17.8545 23.3376 17.5964 23.5964C17.3383 23.8551 16.9889 24 16.625 24H2.375C2.01114 24 1.66167 23.8551 1.40361 23.5964C1.14547 23.3376 1 22.9861 1 22.619V10.7143C1 9.94604 1.62014 9.33333 2.375 9.33333H3.5625ZM4.9375 8.33333V9.33333H5.9375H13.0625H14.0625V8.33333V5.95238C14.0625 4.74077 13.5824 3.57828 12.7271 2.72078C11.8716 1.86319 10.7109 1.38095 9.5 1.38095C8.28914 1.38095 7.12838 1.86319 6.27294 2.72078C5.41758 3.57828 4.9375 4.74077 4.9375 5.95238V8.33333ZM9.5 20.0476C10.3959 20.0476 11.2546 19.6908 11.8874 19.0565C12.52 18.4222 12.875 17.5625 12.875 16.6667C12.875 14.7921 11.3576 13.2857 9.5 13.2857C8.60408 13.2857 7.74537 13.6425 7.11263 14.2769C6.47997 14.9111 6.125 15.7708 6.125 16.6667C6.125 17.5625 6.47997 18.4222 7.11263 19.0565C7.74537 19.6908 8.60409 20.0476 9.5 20.0476Z' fill={color} stroke={color} strokeWidth='2'/>
    </svg>
);

export const StatusActiveIcon = ({color = AppColor.blue, width = 24, height = 24} = {}) => (
    <svg width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='12' cy='12' r='12' fill={color}/>
        <path d='M10.225 16L6 11.8424L7.4 10.4728L10.225 13.2364L16.6 7L18 8.39402L10.225 16Z' fill='#ffffff'/>
    </svg>
);

export const CrossIcon = ({color = AppColor.blue, width = 12, height = 12} = {}) => (
    <svg width={width} height={height} viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 1.7116L10.2884 0L6 4.2884L1.7116 0L0 1.7116L4.2884 6L0 10.2884L1.7116 12L6 7.7116L10.2884 12L12 10.2884L7.7116 6L12 1.7116Z' fill={color} />
    </svg>
);

export const CancelIcon = ({color = AppColor.blue, width = 12, height = 12} = {}) => (
    <svg width={width} height={height} viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 1.7116L10.2884 0L6 4.2884L1.7116 0L0 1.7116L4.2884 6L0 10.2884L1.7116 12L6 7.7116L10.2884 12L12 10.2884L7.7116 6L12 1.7116Z' fill={color}/>
    </svg>
);

export const ChangelIcon = ({color = AppColor.blue, width = 14, height = 13} = {}) => (
    <svg width={width} height={height} viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M13.9998 4.38193L14 2.61848C13.9998 2.52088 13.9007 2.44215 13.7778 2.44199L5.79932 2.44207L5.87228 0.241249C5.90882 0.167508 5.87919 0.083293 5.79932 0.0356574C5.71966 -0.0121455 5.60953 -0.0119805 5.53018 0.0367289L0.0867815 3.36021C0.032136 3.39346 0 3.44525 0 3.49995C0 3.55482 0.032136 3.60645 0.0867815 3.63987L5.53028 6.96342C5.57017 6.98778 5.6179 7.00008 5.66574 7C5.71285 7 5.75975 6.9882 5.79953 6.96442C5.87919 6.91678 5.90892 6.83248 5.87228 6.75883L5.87228 4.55826H13.7778C13.9005 4.55817 13.9998 4.47936 13.9998 4.38193Z' fill={color}/>
        <path d='M0.000211716 10.7559L0 9.24441C0.000213623 9.16075 0.0993433 9.09327 0.22224 9.09313H8.20047L8.12772 7.20678C8.09118 7.14358 8.12081 7.07139 8.20068 7.03056C8.28034 6.98959 8.39047 6.98973 8.46982 7.03148L13.9132 9.88018C13.9679 9.90868 14 9.95307 14 9.99996C14 10.047 13.9679 10.0912 13.9132 10.1199L8.46972 12.9686C8.42983 12.9895 8.3821 13.0001 8.33426 13C8.28715 13 8.24025 12.9899 8.20047 12.9695C8.12081 12.9287 8.09108 12.8564 8.12772 12.7933L8.12772 10.9071H0.222244C0.099452 10.907 0.000211716 10.8395 0.000211716 10.7559Z' fill={color}/>
    </svg>
);

export const UpdatelIcon = ({color = AppColor.blue, width = 12, height = 12} = {}) => (
    <svg width={width} height={height} viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path fill-rule='evenodd' clip-rule='evenodd' d='M0 6C0 2.68629 2.68629 0 6 0C7.53647 0 8.939 0.578287 10 1.52781V0.666667H11.3333V4H8V2.66667H9.266C8.4236 1.84117 7.27173 1.33333 6 1.33333C3.42267 1.33333 1.33333 3.42267 1.33333 6C1.33333 8.57733 3.42267 10.6667 6 10.6667C8.57733 10.6667 10.6667 8.57733 10.6667 6V5.33333H12V6C12 9.31373 9.31373 12 6 12C2.68629 12 0 9.31373 0 6Z' fill={color}/>
    </svg>
);

export const DocumentIcon = ({color = AppColor.blue, width = 14, height = 17} = {}) => (
    <svg width={width} height={height} viewBox='0 0 14 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M7.875 5.95H12.6875L7.875 1.275V5.95ZM1.75 0H8.75L14 5.1V15.3C14 15.7509 13.8156 16.1833 13.4874 16.5021C13.1592 16.8209 12.7141 17 12.25 17H1.75C0.77875 17 0 16.235 0 15.3V1.7C0 0.7565 0.77875 0 1.75 0ZM9.625 13.6V11.9H1.75V13.6H9.625ZM12.25 10.2V8.5H1.75V10.2H12.25Z' fill={color}/>
    </svg>
);

export const UploadIcon = ({color = AppColor.white, width = 14, height = 14} = {}) => (
    <svg width={width} height={height} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M11.6327 9.71429V11.8367H2.16327V9.71429H0V14H13.7959V9.71429H11.6327Z' fill='white'/>
        <path d='M3.67346 6.2449L5.83672 4.08163V9.71429H7.95917V4.08163L10.1224 6.2449L11.6326 4.7347L6.89795 0L2.12244 4.7347L3.67346 6.2449Z' fill={color}/>
    </svg>
);

export const DownloadIcon = ({color = AppColor.blue, width = 14, height = 14} = {}) => (
    <svg width={width} height={height} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M2.16327 4.2857L2.16327 2.16325L11.6327 2.16326L11.6327 4.28571L13.7959 4.28571L13.7959 -1.04904e-05L6.09672e-06 -1.16965e-05L5.72205e-06 4.2857L2.16327 4.2857Z' fill='#157DF1'/>
        <path d='M10.1225 7.7551L7.95921 9.91837L7.95921 4.28571L5.83676 4.28571L5.83676 9.91837L3.67349 7.7551L2.16329 9.2653L6.89798 14L11.6735 9.2653L10.1225 7.7551Z' fill={color}/>
    </svg>
);

export const RemoveIcon = ({color = AppColor.blue, width = 12, height = 15} = {}) => (
    <svg width={width} height={height} viewBox='0 0 12 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M0.789895 12.6284C0.791019 13.0466 0.957673 13.4474 1.25343 13.7432C1.54919 14.039 1.95 14.2056 2.36826 14.2067H8.68174C9.1 14.2056 9.50081 14.039 9.79657 13.7432C10.0923 13.4474 10.259 13.0466 10.2601 12.6284V3.15674H0.789895V12.6284ZM11.05 0.789895H8.28679L7.49832 0H3.55168L2.76321 0.789895H0V2.36826H11.05V0.789895Z' fill={color}/>
    </svg>
);

export const ClockIcon = ({color = AppColor.blue, width = 30, height = 30} = {}) => (
    <svg width={width} height={height} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M16.0039 30.9949C18.4702 30.9947 20.8983 30.3862 23.0733 29.2235C25.2482 28.0608 27.1029 26.3796 28.4729 24.3289C29.843 22.2782 30.6862 19.9213 30.9278 17.467C31.1695 15.0126 30.8021 12.5365 29.8583 10.258C28.9145 7.97948 27.4233 5.9689 25.5169 4.40432C23.6105 2.83974 21.3476 1.76945 18.9288 1.28825C16.5099 0.807045 14.0098 0.929782 11.6497 1.64559C9.2896 2.36139 7.14246 3.64817 5.39845 5.39196C3.29898 7.48872 1.86882 10.1613 1.28903 13.0712C0.709245 15.9812 1.00589 18.9978 2.14142 21.7391C3.27695 24.4804 5.20031 26.8232 7.668 28.4708C10.1357 30.1185 13.0368 30.9969 16.0039 30.9949ZM6.92484 6.92194C8.72059 5.12583 11.0086 3.90258 13.4996 3.4069C15.9906 2.91122 18.5727 3.16537 20.9192 4.1372C23.2658 5.10904 25.2714 6.75491 26.6825 8.86667C28.0936 10.9784 28.8468 13.4612 28.8468 16.001C28.8468 18.5409 28.0936 21.0237 26.6825 23.1354C25.2714 25.2472 23.2658 26.8931 20.9192 27.8649C18.5727 28.8367 15.9906 29.0909 13.4996 28.5952C11.0086 28.0995 8.72059 26.8763 6.92484 25.0802C4.52074 22.6702 3.17062 19.4051 3.17062 16.001C3.17062 12.597 4.52074 9.3319 6.92484 6.92194Z' fill='#E63964' stroke='#E63964' strokeWidth='0.5'/>
        <path d='M22.473 16.2212H16.2018V8.28687H14.0418V18.3812H22.473V16.2212Z' fill='#E63964' stroke='#E63964' strokeWidth='0.5'/>
    </svg>
);

export const FileIcon = ({ width = 20, height = 25} = {}) => (
    <svg width={width} height={height} viewBox='0 0 20 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M11.25 8.75V1.875L18.125 8.75H11.25ZM2.5 0C1.1125 0 0 1.1125 0 2.5V22.5C0 23.163 0.263392 23.7989 0.732233 24.2678C1.20107 24.7366 1.83696 25 2.5 25H17.5C18.163 25 18.7989 24.7366 19.2678 24.2678C19.7366 23.7989 20 23.163 20 22.5V7.5L12.5 0H2.5Z' fill='#157DF1'/>
    </svg>
);

export const PrintIcon = ({color = AppColor.white, width = 17, height = 18} = {}) => (
    <svg width={width} height={height} viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M16.3929 5.05402H13.9643V1.37041C13.9643 1.20758 13.9003 1.05142 13.7865 0.936287C13.6726 0.821152 13.5182 0.75647 13.3571 0.75647H3.64286C3.48183 0.75647 3.3274 0.821152 3.21354 0.936287C3.09968 1.05142 3.03571 1.20758 3.03571 1.37041V5.05402H0.607143C0.446119 5.05402 0.291689 5.1187 0.177828 5.23384C0.0639666 5.34897 0 5.50513 0 5.66796V13.0352C0 13.198 0.0639666 13.3542 0.177828 13.4693C0.291689 13.5844 0.446119 13.6491 0.607143 13.6491H3.03571V17.3327C3.03571 17.4956 3.09968 17.6517 3.21354 17.7669C3.3274 17.882 3.48183 17.9467 3.64286 17.9467H13.3571C13.5182 17.9467 13.6726 17.882 13.7865 17.7669C13.9003 17.6517 13.9643 17.4956 13.9643 17.3327V13.6491H16.3929C16.5539 13.6491 16.7083 13.5844 16.8222 13.4693C16.936 13.3542 17 13.198 17 13.0352V5.66796C17 5.50513 16.936 5.34897 16.8222 5.23384C16.7083 5.1187 16.5539 5.05402 16.3929 5.05402ZM4.25 1.98434H12.75V5.05402H4.25V1.98434ZM12.75 16.7188H4.25V11.1934H12.75V16.7188ZM15.7857 12.4212H13.9643V10.5794C13.9643 10.4166 13.9003 10.2605 13.7865 10.1453C13.6726 10.0302 13.5182 9.96551 13.3571 9.96551H3.64286C3.48183 9.96551 3.3274 10.0302 3.21354 10.1453C3.09968 10.2605 3.03571 10.4166 3.03571 10.5794V12.4212H1.21429V6.28189H15.7857V12.4212Z' fill={color}/>
    </svg>
);

export const ArchiveIcon = ({color = AppColor.blue, width = 18, height = 14} = {}) => (
    <svg width={width} height={height} viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M4.61312 0.85C5.62876 0.85 6.63188 1.14115 7.6339 1.75807V12.3498C6.49048 11.8406 5.3647 11.5568 4.26148 11.5318C3.05676 11.5046 1.91597 11.7872 0.85 12.3724V2.06082C2.19593 1.22987 3.44823 0.85 4.61312 0.85ZM13.3384 11.5506C12.2819 11.5553 11.2562 11.8301 10.1823 12.3307V1.78183C11.2781 1.14801 12.3368 0.85 13.3621 0.85C14.5246 0.85 15.7223 1.22634 16.9665 2.04428C16.9689 5.32672 16.9682 6.99992 16.9673 9.11238C16.9669 10.0906 16.9665 11.163 16.9663 12.533C15.7181 11.8945 14.5484 11.5452 13.3384 11.5506Z' stroke={color} strokeWidth='1.7'/>
    </svg>
);

export const LogoIcon = ({color = AppColor.blue, width = 18, height = 14} = {}) => (
    <svg width={width} height={height} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path fill-rule='evenodd' clip-rule='evenodd' d='M2.78371 13.2163L16 26.4326L23.5923 18.8402L26.376 21.6239L16 32L0 16L2.78371 13.2163Z' fill={color}/>
        <path fill-rule='evenodd' clip-rule='evenodd' d='M15.9999 0L31.9999 16L29.2162 18.7837L15.9999 5.56743L8.40762 13.1598L5.6239 10.376L15.9999 0Z' fill={color}/>
    </svg>
);

export const CloseIcon = ({color = AppColor.white, width = 17, height = 17} = {}) => (
    <svg width={width} height={height} viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M17 2.42477L14.5752 0L8.5 6.07523L2.42477 0L0 2.42477L6.07523 8.5L0 14.5752L2.42477 17L8.5 10.9248L14.5752 17L17 14.5752L10.9248 8.5L17 2.42477Z' fill={color}/>
    </svg>
);

export const OptimizeIcon = ({color = AppColor.white, width = 18, height = 18} = {}) => (
    <svg width={width} height={height} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='9' cy='9' r='8' stroke={color} strokeWidth='2'/>
        <path d='M1 11H17' stroke={color} strokeWidth='2'/>
        <path d='M9 11L13 7' stroke={color} strokeWidth='2'/>
    </svg>
);

export const AutoassignIcon = ({color = AppColor.white, width = 20, height = 12} = {}) => (
    <svg width={width} height={height} viewBox='0 0 20 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M1 7L4 10L13 1' stroke={color} strokeWidth='2'/>
        <path d='M7 7L10 10L19 1' stroke={color} strokeWidth='2'/>
    </svg>
);

export const UnscheduleIcon = ({color = AppColor.white, width = 18, height = 18} = {}) => (
    <svg width={width} height={height} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='9' cy='9' r='8' stroke={color} strokeWidth='2'/>
        <path d='M12 6L6 12' stroke={color} strokeWidth='2'/>
        <path d='M6 6L12 12' stroke={color} strokeWidth='2'/>
    </svg>
);

export const ChatIcon = ({color = AppColor.blue, width = 22, height = 21} = {}) => (
    <svg width={width} height={height} viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M21 1H1V16H4V19L9 16H21V1Z' stroke={color} strokeWidth='2'/>
        <path d='M5 6C5.8 6 13.3333 6 17 6' stroke={color} strokeWidth='2'/>
        <path d='M5 10C5.8 10 13.3333 10 17 10' stroke={color} strokeWidth='2'/>
    </svg>
);

export const PickedUpIcon = ({ width = 24, height = 24} = {}) => (
    <svg width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='12' cy='12' r='11.5' fill='#157DF1' stroke='white'/>
        <path d='M10.225 16L6 11.8424L7.4 10.4728L10.225 13.2364L16.6 7L18 8.39402L10.225 16Z' fill='white'/>
    </svg>
);

export const FailedIcon = ({ width = 24, height = 24} = {}) => (
    <svg width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='12' cy='12' r='11.5' fill='#E63964' stroke='white'/>
        <path d='M17 8.42633L15.5737 7L12 10.5737L8.42633 7L7 8.42633L10.5737 12L7 15.5737L8.42633 17L12 13.4263L15.5737 17L17 15.5737L13.4263 12L17 8.42633Z' fill='white'/>
    </svg>
);

export const SendIcon = ({ width = 19, height = 19} = {}) => (
    <svg width={width} height={height} viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M4.41205 8.66011H14.2877L2.43691 2.73471L4.41205 8.66011ZM14.2877 10.3406H4.41205L2.43691 16.266L14.2877 10.3406ZM0.0922039 1.01489C-0.201927 0.132499 0.230605 -0.247336 1.06303 0.168875L18.2226 8.74868C19.0529 9.16383 19.0551 9.83586 18.2226 10.2521L1.06303 18.8319C0.232725 19.247 -0.201342 18.8665 0.0922039 17.9859L2.9207 9.50037L0.0922039 1.01489Z' fill='white'/>
    </svg>
);

export const HideIcon = ({ width = 7, height = 10} = {}) => (
    <svg width={width} height={height} viewBox='0 0 7 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M5.18703 0L6.5137 1.38155L2.76308 5.00249L6.5137 8.61845L5.18703 10L0.718204 5.69077L0 5.00249L0.718204 4.30924L5.18703 0Z' fill='#157DF1'/>
    </svg>
);

export const ModuleIcon = ({ color = AppColor.white, width = 18, height = 18} = {}) => (
    <svg width={width} height={height} viewBox='0 0 27 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M25.049 16.9194C23.5127 16.0402 21.6296 16.2863 20.3556 17.5377L18.517 16.4921C18.7106 15.9689 18.8073 15.351 18.8073 14.7332C18.8073 12.1668 16.9203 10.0281 14.4527 9.60033V7.46164C16.0978 7.03391 17.3558 5.56059 17.3558 3.80211C17.3558 1.71095 15.614 0 13.485 0C11.3561 0 9.61426 1.71095 9.61426 3.80211C9.61426 5.56059 10.8723 7.03391 12.5173 7.46164V9.60033C10.0497 10.0281 8.16272 12.1663 8.16272 14.7332C8.16272 15.351 8.25949 15.9213 8.45303 16.4917L6.61441 17.5372C5.39319 16.3377 3.50861 16.0102 1.92111 16.9189C0.0824896 17.9645 -0.546511 20.2938 0.517951 22.0993C1.50258 23.8269 3.84778 24.5902 5.79187 23.4776C7.34018 22.5746 8.01757 20.8156 7.58211 19.2002L9.46911 18.1546C10.4368 19.2948 11.8883 20.0077 13.5334 20.0077C15.1785 20.0077 16.63 19.2948 17.5977 18.1546L19.4847 19.2002C19.0493 20.8156 19.7266 22.6216 21.2745 23.4776C23.1315 24.5403 25.5028 23.9329 26.5484 22.0993C27.5166 20.2938 26.8876 17.965 25.049 16.9194ZM4.82418 21.8621C4.25518 22.2347 2.88202 22.297 2.16303 21.1492C1.6308 20.2462 1.96949 19.0581 2.8888 18.5353C3.93342 18.0225 5.00466 18.3785 5.54995 19.2482C6.08218 20.1512 5.74349 21.3393 4.82418 21.8621ZM11.5496 3.80211C11.5496 2.75653 12.4206 1.90106 13.485 1.90106C14.5495 1.90106 15.4204 2.75653 15.4204 3.80211C15.4204 4.84769 14.5495 5.70317 13.485 5.70317C12.4206 5.70317 11.5496 4.84769 11.5496 3.80211ZM13.485 18.06C11.598 18.06 10.0981 16.5867 10.0981 14.7332C10.0981 12.8797 11.598 11.4063 13.485 11.4063C15.372 11.4063 16.872 12.8797 16.872 14.7332C16.872 16.5867 15.372 18.06 13.485 18.06ZM24.807 21.1492C24.3624 21.96 23.2384 22.3987 22.1459 21.8621C21.2266 21.3393 20.8874 20.1512 21.4201 19.2482C21.9664 18.3766 23.0376 18.0239 24.0813 18.5353C25.0006 19.0581 25.3393 20.2462 24.807 21.1492Z' fill={color}/>
    </svg>
);

export const GearsIcon = ({ color = AppColor.white, width = 24, height = 24 } = {}) => (
    <svg width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='10' width='4' height='3' fill={color}/>
        <rect x='10' y='21' width='4' height='3' fill={color}/>
        <rect x='3' y='10' width='4' height='3' transform='rotate(90 3 10)' fill={color}/>
        <rect x='24' y='10' width='4' height='3' transform='rotate(90 24 10)' fill={color}/>
        <rect width='4' height='3' transform='matrix(0.707113 0.707101 -0.707113 0.707101 19.071 2.10049)' fill={color}/>
        <rect width='4' height='3' transform='matrix(0.707112 0.707101 -0.707112 0.707101 4.2218 16.9497)' fill={color}/>
        <rect width='4' height='3' transform='matrix(-0.707113 0.707101 -0.707113 -0.707101 7.05029 4.22183)' fill={color}/>
        <rect width='4' height='3' transform='matrix(-0.707113 0.707101 -0.707113 -0.707101 21.8995 19.0711)' fill={color}/>
        <circle cx='12' cy='12' r='9' stroke={color} strokeWidth='2'/>
        <circle cx='12' cy='12' r='3' fill={color}/>
    </svg>
);