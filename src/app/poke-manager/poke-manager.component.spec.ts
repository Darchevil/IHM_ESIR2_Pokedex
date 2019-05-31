import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeManagerComponent } from './poke-manager.component';

describe('PokeManagerComponent', () => {
  let component: PokeManagerComponent;
  let fixture: ComponentFixture<PokeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
