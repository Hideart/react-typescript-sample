import { IDraggableCardData } from '../draggable-card/types';

export interface IOwnProps {
  readonly formType: ITaskFormType;
  readonly tasksLength: number;
  readonly cardData?: IDraggableCardData | null;
  readonly onSubmit: (data: IDraggableCardData) => void;
  readonly onCancel: () => void;

  readonly className?: string;
  readonly card?: IDraggableCardData;
}

export enum ITaskFormType {
  ADD = 'addTask',
  EDIT = 'editTask',
}

export interface IUserData {
  id: string;
  fullName: string;
  age: number;
}