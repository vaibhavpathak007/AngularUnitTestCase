import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import {of} from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should get the value from service', () => {
    let todos = [1,2,3];
    spyOn(service,'getTodos').and.callFake(()=>{ return of(todos)});
    component.ngOnInit()
    expect(component.todos).toBe(todos);
  });
});