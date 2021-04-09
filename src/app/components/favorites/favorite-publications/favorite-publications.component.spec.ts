import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePublicationsComponent } from './favorite-publications.component';

describe('FavoritePublicationsComponent', () => {
  let component: FavoritePublicationsComponent;
  let fixture: ComponentFixture<FavoritePublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePublicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
