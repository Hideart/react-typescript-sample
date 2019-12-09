import React, { Component } from 'react';
import styledComponents, { CSSProperties } from 'styled-components';
import { Draggable, DragComponent, Droppable } from 'react-dragtastic';

import styles from './styles';
import { DateService } from '@/core/services/date.service';
const dateService = new DateService();

import { IOwnProps, CardType } from './types';
import { Button, ButtonTypeView } from '@/core/components/button';
import { EditIcon, CancelIcon } from '@/core/components/icon';
import { AppColor } from '@/core/models/enums/app-color';

class DraggableGridItemLayout extends Component<IOwnProps> {
  handleDragStart = () => {
    const { cardData, onDragStart } = this.props;
    onDragStart(cardData.id);
  }

  handleDragEnd = () => {
    const { cardData, onDragEnd } = this.props;
    onDragEnd && onDragEnd(cardData.id);
  }

  handleDrop = () => {
    const { cardData, onDrop } = this.props;
    onDrop(cardData.id);
  }

  renderCard = ({type, dragState}: {type: CardType, dragState: any}): any => {
    const {
      id,
      title,
      desc,
      createdAt,
      user,
    } = this.props.cardData;

    let style: CSSProperties = {};

    if (type === CardType.DRAGGABLE) {
      style = {
        left: dragState.x,
        top: dragState.y,
        position: 'fixed',
      };
    }

    if (type === CardType.DROPPABLE && !dragState.isDragging) {
      style = { display: 'none' };
    } else if (type === CardType.MAIN && dragState.isDragging) {
      style = { display: 'none' };
    }

    return (
      <div
        className={`cell ${type}`}
        style={style}
        {...dragState.events}
      >
        {type === CardType.MAIN &&
          <div className='cell__controls'>
          <div className='cell__controls-wrapper'>
            <Button
              icon={EditIcon({ color: AppColor.white })}
              style={{ minWidth: 0, padding: '0 6px', marginRight: 5 }}
              onClick={() => this.props.onEdit(id)}
            />
            <Button
              view={ButtonTypeView.SECOND}
              icon={CancelIcon()}
              style={{ minWidth: 0, padding: 10 }}
              onClick={() => this.props.onDelete(id)}
            />
          </div>
        </div>
        }

        <div className='cell__data-row'>
          <p className='cell__data-row-title'>Название:</p>
          <p className='cell__data-row-value'>{title}</p>
        </div>
        <div className='cell__data-row'>
          <p className='cell__data-row-title'>Описание:</p>
          <p className='cell__data-row-value'>{desc}</p>
        </div>
        <div className='cell__data-row'>
          <p className='cell__data-row-title'>Исполнитель:</p>
          <p className='cell__data-row-value'>{user.fullName}</p>
        </div>
        <div className='cell__data-row'>
          <p className='cell__data-row-title'>Создано:</p>
          <p className='cell__data-row-value'>
            {dateService.defaultDateFormat(new Date(createdAt))}
          </p>
        </div>
      </div>
    );
  }

  render() {
    const {
      className,
      cardData,
      empty,
    } = this.props;

    return (
      <section className={className}>
        <Droppable
          accepts={cardData.type}
          onDrop={this.handleDrop}
        >
          {dragState => this.renderCard({ type: CardType.DROPPABLE, dragState })}
        </Droppable>
        {!empty &&
          <div>
            <Draggable
              id={cardData.id}
              type={cardData.type}
              onDragStart={this.handleDragStart}
              onDragEnd={this.handleDragEnd}
            >
              {dragState => this.renderCard({ type: CardType.MAIN, dragState })}
            </Draggable>
            <DragComponent for={cardData.id}>
              {dragState => this.renderCard({ type: CardType.DRAGGABLE, dragState })}
            </DragComponent>
          </div>
        }
      </section>
    );
  }
}

export const DraggableGridItem = styledComponents(DraggableGridItemLayout)`${styles}`;
