export class TaskParent {
  constructor(public text: string, public state: State) {}
}
export class Task extends TaskParent {
  constructor(text: string, state: State, public id: number) {
    super(text, state);
  }
}
export enum State {
  TODO = 'todo',
  PROGRESS = 'progress',
  DONE = 'done',
}
