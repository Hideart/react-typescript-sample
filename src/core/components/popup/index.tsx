import React, { Component } from 'react';
import styledComponents from 'styled-components';

import { default as styles } from './styles';

import { IOwnProps } from './types';

class PopupLayout extends Component<IOwnProps> {

    render() {
      const { className, title, children, onClose, visible, ...others } = this.props;
      return (
        <section className={className}>
          <div className='shade' onClick={onClose} />
          <section className='popup' {...others}>
            <p className='popup__title'>{title}</p>
            {children}
            <button className='popup__close' onClick={onClose}>
              close
            </button>
          </section>
        </section>
      );
    }
}

export const Popup = styledComponents(PopupLayout)`${styles}`;
