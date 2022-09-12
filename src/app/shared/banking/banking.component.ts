import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css'],
})
export class BankingComponent implements OnInit {
  private poupanca: number = 50;
  private banco: number = 50;
  public total: number = 0;

  constructor() {}

  ngOnInit(): void {}

  get getPoupanca() {
    return this.poupanca;
  }
  get getBanco() {
    return this.banco;
  }

  setSacar(currentValue: string): number | undefined {
    const newValue = Number(currentValue);
    if (
      isNaN(newValue) ||
      this.poupanca < newValue
    ) {
      return;
    }
    this.poupanca -= newValue;
    return (this.banco += newValue);
  }

  setDepositar(currentValue: string): number | undefined {
    const newValue = Number(currentValue);
    if (
      isNaN(newValue) ||
     this.banco < newValue
    ) {
      return;
    }
    this.banco -= newValue;
    return (this.poupanca += newValue);
  }
}
