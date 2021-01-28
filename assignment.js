// https://github.com/dvlprtanvir/assignment

// kilometerToMeter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(7);
console.log(result);



// budgetCalculator
function budgetCalculator(watch, phone, laptop) {

    var watch = watch * 50;
    var phone = phone * 100;
    var laptop = laptop * 500;

    var total = watch + phone + laptop;
    return total;
}


var result = budgetCalculator(2, 2, 2);
console.log(result);



// hotelCost
function hotelCost(days) {
    var price = 0;
    if (days <= 10) {
        price = days * 100;
    } else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * 80;
        price = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var twentyPlusDays = remaining * 50;
        price = firstTenDays + secondTenDays + twentyPlusDays;
    }
    return price;
}
var total = hotelCost(31);
console.log(total);



//megaFriend
function megaFriend(names) {

    var max = names[0];
    for (var i = 0; i < names.length; i++) {
      var element = names[i];
      if (element.length > max.length) {
        var max = element;
      }
    } return max;
  }
  
  var names = ["ab3", "abcd5", "abcdefg8", "abcde6"];
  var max = megaFriend(names);
  console.log(max);