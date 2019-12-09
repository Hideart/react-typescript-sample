import React, { Component } from 'react';
import styledComponents from 'styled-components';

import styles from './styles';
import { IOwnState, IOwnProps } from './types';
import { AppColor } from '@/core/models/enums/app-color';
import { ITaskFormType } from './components/task-form/types';
import { IDraggableCardData } from './components/draggable-card/types';

import { DraggableGridItem } from './components/draggable-card';
import { Popup } from '@/core/components/popup';
import { Search } from '@/core/components/search';
import { Button, ButtonTypeView } from '@/core/components/button';
import { PlusIcon } from '@/core/components/icon';
import { TaskForm } from './components/task-form/index';

class Board extends Component<IOwnProps, IOwnState> {

  state: IOwnState = {
    draggedId: null,
    editableCard: null,
    addCardPopupVisible: false,
    tasks: [],
    filteredTasks: [],
  };

  handleDragStart = (id: string) => {
    this.setState({ draggedId: id });
  }

  handleDrop = (id: string) => {
    const { tasks, draggedId } = this.state;
    const items = [ ...tasks ];
    const curOrder = (items.find(el => el.id === draggedId) || { order: null }).order;
    const newOrder = (items.find(el => el.id === id) || { order: null }).order;
    const newTaskList = items.map(el => {
      if (el.id === draggedId) {
        el.order = newOrder!;
      }
      if (el.id === id) {
        el.order = curOrder!;
      }
      return {...el};
    });
    this.setState({ draggedId: null, tasks: newTaskList, filteredTasks: newTaskList });
  }

  handleAddTask = (data: IDraggableCardData) => {
    this.setState(oldState => ({
      tasks: [ ...oldState.tasks, data ],
      filteredTasks: [ ...oldState.filteredTasks, data ],
      addCardPopupVisible: false,
    }));
  }

  handleChangeTask = (data: IDraggableCardData) => {
    const { tasks } = this.state;
    const newTasks = tasks.map(el => el.id === data.id ? {...el, ...data} : el);
    this.setState({ tasks: newTasks, filteredTasks: newTasks, editableCard: null });
  }

  handleSearch = (value: string) => {
    if (!value.trim()) {
      this.setState({
        filteredTasks: [...this.state.tasks],
      });
      return;
    }
    const searchValue = value.toLocaleLowerCase();
    this.setState({
      filteredTasks: [...this.state.tasks.filter(el => {
        const title = el.title.toLowerCase();
        const userName = el.user.fullName.toLowerCase();
        if (title.includes(searchValue) || userName.includes(searchValue)) {
          return el;
        }
        return;
      })],
    });
  }

  handleDeleteCard = (id: string) => {
    const { tasks, filteredTasks } = this.state;
    const newTasks = tasks.filter(el => el.id !== id)
      .map((el, i) => ({ ...el, order: i + 1}));
    const newFilteredTasks = filteredTasks.filter(el => el.id !== id)
      .map((el, i) => ({ ...el, order: i + 1}));
    this.setState({ tasks: newTasks, filteredTasks: newFilteredTasks });
  }

  render() {
    return (
      <section className={this.props.className}>
        <Popup
          title='Добавить задачу'
          visible={this.state.addCardPopupVisible}
          onClose={() => this.setState({ addCardPopupVisible: false })}
        >
          <TaskForm
            tasksLength={this.state.tasks.length}
            formType={ITaskFormType.ADD}
            onSubmit={this.handleAddTask}
            onCancel={() => this.setState({ addCardPopupVisible: false })}
          />
        </Popup>
        <Popup
          title='Редактировать задачу'
          visible={!!this.state.editableCard}
          onClose={() => this.setState({ editableCard: null })}
        >
          <TaskForm
            cardData={this.state.editableCard}
            tasksLength={this.state.tasks.length}
            formType={ITaskFormType.EDIT}
            onSubmit={this.handleChangeTask}
            onCancel={() => this.setState({ editableCard: null })}
          />
        </Popup>
        <div className='filters'>
          <Button
            view={ButtonTypeView.SECOND}
            icon={PlusIcon({ color: AppColor.blue })}
            style={{ padding: 10, minWidth: 0, marginRight: 10 }}
            onClick={() => this.setState({ addCardPopupVisible: true })}
          />
          <Search onChange={this.handleSearch} />
        </div>
        <div className='board'>
          {this.state.filteredTasks.length
            ? this.state.filteredTasks.sort((a, b) => a.order - b.order).map(el => (
              <DraggableGridItem
                cardData={el}
                key={el.id}
                onDragStart={this.handleDragStart}
                onDrop={this.handleDrop}
                onEdit={(id: string) => this.setState({ editableCard: this.state.tasks.find(task => task.id === id)! })}
                onDelete={this.handleDeleteCard}
              />
            ))
            : <span className='board__not-found'>Задачи не найдены</span>
        }
        </div>
      </section>
    );
  }
}

export const BoardPage = styledComponents(Board)`${styles}`;
