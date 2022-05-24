export class Todolist {
  public name: string
  public finished: boolean
  constructor(name: string, finished?: boolean) {
    this.finished = finished ? finished : false;
    this.name = name;
  }
}
