import React, { Component } from 'react';
import { FormikProps, FormikErrors, Form, Formik } from 'formik';

import { IOwnProps, IUserData, ITaskFormType } from './types';

import { Button, ButtonTypeView } from '@/core/components/button';
import { Input } from '@/core/components/input';
import { Select, ISelectOption } from '@/core/components/select';
import { IDraggableCardData } from '../draggable-card/types';

const users: IUserData[] = [
  {
    id: 'user-1',
    fullName: 'Никола Тесла',
    age: 22,
  },
  {
    id: 'user-2',
    fullName: 'Альберт Эйнштейн',
    age: 8,
  },
  {
    id: 'user-3',
    fullName: 'Исаак Ньютон',
    age: 16,
  },
];

const selectOptions: ISelectOption[] = users.map(el => ({ value: el.fullName, key: el.id }));

export class TaskForm extends Component<IOwnProps> {

  handleFormSubmit = (data: IDraggableCardData) => {
    const { formType, onSubmit, tasksLength } = this.props;
    switch (formType) {
      case ITaskFormType.ADD:
        onSubmit({
          ...data,
          id: new Date().toString(),
          order: tasksLength + 1,
          createdAt: new Date().toString(),
        });
        break;
      case ITaskFormType.EDIT:
        onSubmit(data);
        break;
    }
  }

  handleUserChange = (setFieldValue: any) => (option: ISelectOption) => {
    const user = users.find(el => el.id === option.key);
    setFieldValue('user', user);
  }

  render() {
    const { cardData } = this.props;
    return (
      <Formik
        enableReinitialize={true}
        initialValues={{
          id: cardData ? cardData.id : '',
          type: cardData ? cardData.type : 'task',
          title: cardData ? cardData.title : '',
          desc: cardData ? cardData.desc : '',
          order: cardData ? cardData.order : 0,
          user: cardData ? cardData.user : users[0],
          createdAt: cardData ? cardData.createdAt : '',
        }}
        validate={(values: IDraggableCardData) => {
          const errors: FormikErrors<IDraggableCardData> = {};
          if (!values.title || !values.title.trim()) {
            errors.title = '* Название обязательно для заполнения';
          }
          if (!values.desc || !values.desc.trim()) {
            errors.desc = '* Описание обязательно для заполнения';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => { resetForm(); this.handleFormSubmit(values); }}
        render={(props: FormikProps<IDraggableCardData>) => {
          const {
            touched,
            errors,
            values,
            setFieldValue,
            handleChange,
            handleBlur,
          } = props;
          return (
          <Form className='form'>
            <fieldset>
              <Select
                onChange={this.handleUserChange(setFieldValue)}
                defaultVal={selectOptions[0]}
                value={selectOptions.find(el => el.key === values.user.id)!}
                options={selectOptions}
                placeholder='Исполнитель'
                className='form__input'
              />
            </fieldset>
            <fieldset>
              <Input
                type='text'
                name='title'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder='Название'
                className='form__input'
              />
              {touched.title && errors.title && <p className='form__error'>{errors.title}</p>}
            </fieldset>
            <fieldset>
              <Input
                type='text'
                name='desc'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.desc}
                placeholder='Описание'
                className='form__input'
              />
              {touched.desc && errors.desc && <p className='form__error'>{errors.desc}</p>}
            </fieldset>
            <Button
              type='submit'
              style={{ marginRight: 20, minWidth: 'calc(50% - 10px)' }}
            >
              Сохранить
            </Button>
            <Button
              type='button'
              style={{ minWidth: 'calc(50% - 10px)' }}
              view={ButtonTypeView.SECOND}
              onClick={this.props.onCancel}
            >
                Отмена
            </Button>
          </Form>
        );
      }}
      />
    );
  }
}