var dd= require('./data.json')

function ff() {
    const pv = dd.filter((account) => {
        return account.isActive=true;
      });
      console.log(pv);
  }

function hv() {
    const vp = dd.map((account) => {
        return account.balance=true;
      });
      console.log(vp);
  }

  function all() {
    const va = dd.filter((account) => {
        return account.friends;
      });
      console.log(va);
  }