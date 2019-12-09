import { IUserData } from '../task-form/types';

export interface IOwnProps {
  readonly cardData: IDraggableCardData;
  readonly onDragStart: (data: any) => void;
  readonly onDrop: (data: any) => void;
  readonly onEdit: (id: string) => void;
  readonly onDelete: (id: string) => void;

  readonly onDragEnd?: (data: any) => void;
  readonly style?: Object;
  readonly className?: string;
  readonly empty?: boolean;
}

export interface IDraggableCardData {
  id: string;
  type: string;
  title: string;
  desc: string;
  order: number;
  user: IUserData;
  createdAt: string;
}

export enum CardType {
  MAIN = '',
  DRAGGABLE = 'draggable',
  DROPPABLE = 'droppable',
}
