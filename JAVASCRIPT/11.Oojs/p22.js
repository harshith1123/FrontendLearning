/* 
  Wallet class
  balance - property

  methods
    debit(val)
    credit(val)
*/

class Wallet{
    
    constructor(val){
        this.balance = val
    }

    debit(x,val){
        if(val>this.balance){
            document.writeln(`<h3> Sorry, insufficient balance, and current balance is &#8377;${this.balance} </h3>`)
        }else{
            this.balance -=val;
            document.writeln(`<h3>Amount of sum &#8377;${val} is credited to wallet and balance is &#8377;${this.balance}</h3>`)
        }
    }
    credit(val){
        this.balance += val;
        document.writeln(`<h3>Amount of sum &#8377; ${val} is credited to wallet and balance is &#8377;${this.balance}</h3>`)
    }
}

let x = new Wallet(0);

x.credit(1000);
x.debit(250.56);
x.debit(1200)