function dayOfProgrammer(year) {

  function isJulian(){
      return year <=1917 ? true : false
  }
     
   function checkLeapYear(year) {
     if (year % 4 === 0 && isJulian()) {
         console.log("1")
       return true;
     } else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 ===0){
         
         if(isJulian()){
             console.log("2")
             return false
         }
         console.log("1")
         return true
     }
      else {
          console.log("3")
       return false;
     }
   }
 
   let daysPerMonth = [
     31,
     checkLeapYear(year) ? 29 : 28,
     31,
     30,
     31,
     30,
     31,
     31,
     30,
     31,
     30,
     31,
   ];
   
   console.log(daysPerMonth[1])
 
   let days = year === 1918 ? 256 + 13 : 256;
   let month = 1;
 
   function setZero(num) {
     if (num < 10) {
       return "0" + num;
     }
     return num + "";
   }
 
   while (days > 0) {
     if (daysPerMonth[month - 1] <= days) {
       month++;
       days -= daysPerMonth[month - 1];
     } else {
       break;
     }
   }
 
   return setZero(days - 1) + "." + setZero(month) + "." + year;
 }
 