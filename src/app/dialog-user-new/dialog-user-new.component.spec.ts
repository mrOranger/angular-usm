import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserNewComponent } from './dialog-user-new.component';

describe('DialogUserNewComponent', () => {
  let component: DialogUserNewComponent;
  let fixture: ComponentFixture<DialogUserNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUserNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUserNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
