import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustomomizadasComponent } from './diretivas-customomizadas.component';

describe('DiretivasCustomomizadasComponent', () => {
  let component: DiretivasCustomomizadasComponent;
  let fixture: ComponentFixture<DiretivasCustomomizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasCustomomizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasCustomomizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
