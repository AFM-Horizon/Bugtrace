import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bug } from 'src/app/models/bug';
import { BugService } from '../index-bug';

import { BugDescComponent } from './bug-desc.component';

describe('BugDescComponent', () => {
  let component: BugDescComponent;
  let fixture: ComponentFixture<BugDescComponent>;
  let mockBugService: jasmine.SpyObj<BugService>;

  beforeEach(async () => {
    mockBugService = jasmine.createSpyObj(['getBugById', 'updateBug','addBug', 'updateBugData']);

    await TestBed.configureTestingModule({
      declarations: [ BugDescComponent ],
      providers: [{ provide: BugService, useValue: mockBugService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const bug: Bug = {
      name: 'test',
      author: 'test',
      status: 'test'
    };
    fixture = TestBed.createComponent(BugDescComponent);
    component = fixture.componentInstance;
    component.bug = bug;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
