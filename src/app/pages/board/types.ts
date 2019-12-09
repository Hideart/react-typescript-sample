import { IDraggableCardData } from './components/draggable-card/types';

export interface IOwnProps {
  readonly className?: string;
}

export interface IOwnState {
  readonly draggedId: string | null;
  readonly addCardPopupVisible: boolean;
  readonly editableCard: IDraggableCardData | null;
  readonly tasks: IDraggableCardData[];
  readonly filteredTasks: IDraggableCardData[];
}