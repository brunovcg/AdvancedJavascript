function timeConversion(s) {
    
  const finalTwo = s.slice(-2)
  const initialTwo = s.slice(0,2)
  
  if (finalTwo === 'AM' && initialTwo == "12") {
    return s.substring(0, s.length -2).replace("12","00")
      
  } else if (finalTwo === 'AM' || (finalTwo === 'PM' && initialTwo == "12")){
      return s.substring(0,s.length -2) 
  } else{
      let start = s.slice(0,2)
      let startConverted = Number(s.slice(0,2)) + 12
      return s.substring(0,s.length -2).replace(start, startConverted)
  }
  
}



console.log(timeConversion("12:05:39AM"))