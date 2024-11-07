// task.model.ts
export interface Task {
  id: string;
  title: string;
  start: string; // ISO format datetime
  end: string; // ISO format datetime
  extendedProps: {
    state: string;
    location: string;
  };
}

export enum TaskStatus {
  Scheduled = 'Scheduled',
  InProgress = 'InProgress',
  Completed = 'Completed',
}
