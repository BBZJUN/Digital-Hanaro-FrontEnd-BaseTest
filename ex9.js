const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};

function f([label], price) {
  console.log(`${label.padEnd(5, ' ')} ${priceFmt(price)}`);
}

function priceFmt(price) {
  return price.toLocaleString().padStart(7, ' ') + '원 ';
}
function bill(tableNo) {
  let orders = {};

  function order(menu) {
    if (orders[menu]) {
      orders[menu]++;
    } else {
      orders[menu] = 1;
    }
  }

  function printBill() {
    let totalPrice = 0;
    let totalTax = 0;

    console.log(`\n\nTable. ${tableNo}`);
    console.log('='.repeat(20));

    for (let item in orders) {
      let count = orders[item];
      let { price, taxfree } = MENU[item];
      let menuPrice = price * count;
      let tax = taxfree ? 0 : Math.round(menuPrice / 11);

      totalPrice += menuPrice;
      totalTax += tax;

      console.log('*', item);
      f`공급가액: ${menuPrice}원`;
      f`부가세액: ${tax}원`;
      console.log('-'.repeat(20));
    }

    f`주문합계: ${totalPrice}원`;
    f`주문합계: ${totalTax}원`;
    console.log('='.repeat(20));
  }

  return { order, printBill };
}


const table1 = bill(1);
table1.order('짜장');
table1.order('짬뽕');
table1.printBill();

const table2 = bill(2);
table2.order('짜장');
table2.printBill();

table1.order('탕슉');
table1.printBill();

table2.order('짬뽕');
table2.printBill();

