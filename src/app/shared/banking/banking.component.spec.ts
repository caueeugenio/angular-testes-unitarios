import { ListComponent } from '../investiments/components/list/list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getPoupanca: should be like 50', () => {
    expect(component.getPoupanca).toEqual(50);
  });
  it('(U) getBanco: should be like 50', () => {
    expect(component.getBanco).toEqual(50);
  });
  it('(U) setSacar: should be transfer poupanca to banco', () => {
    expect(component.setSacar('50'));
    expect(component.getPoupanca).toEqual(0);
    expect(component.getBanco).toEqual(100);
  });
  it('(U) setDepositar: should be transfer banco to poupanca', () => {
    expect(component.setDepositar('50'));
    expect(component.getPoupanca).toEqual(100);
    expect(component.getBanco).toEqual(0);
  });

  it('(U) setSacar: should transfer poupanca to banco if dont contain string (isNan) or poupanca minor(<) that value', () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(50);
    expect(component.getBanco).toEqual(50);
  });

  it('(I) setSacar: should transfer banco to poupanca', () => {
    let element = fixture.debugElement.nativeElement;
    element.querySelector('#inputBanco').value = '10';
    element.querySelector('#depositarBtn').click();
    fixture.detectChanges();

    expect(element.querySelector('#getBanco').textContent).toEqual('40');

    expect(component.getBanco).toEqual(40);
    expect(component.getPoupanca).toEqual(60);
  });
});
