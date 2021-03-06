import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentService } from '../comment.service';

import { CommentComponent } from './comment.component';
import { CommentRequest } from './../../models/commentRequestModel';
import { CommentResponse } from 'src/app/models/commentResponseModel';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  let mockCommentService: jasmine.SpyObj<CommentService>;

  beforeEach(async () => {
    mockCommentService = jasmine.createSpyObj<CommentService>(['addComment', 'deleteComment', 'updateComment', 'updateCommentData'], ['allComments$']);

    await TestBed.configureTestingModule({
      declarations: [ CommentComponent ],
      providers: [
        { provide: CommentService, useValue: mockCommentService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const comment: CommentResponse = {
      _id: 'test',
      comment: 'test',
      user: { 
        username: 'test', 
        password: 'test'
      }
    }; 
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    component.comment = comment;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
