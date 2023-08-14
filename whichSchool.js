let bethanyAge = Math.round(Math.random() * 4) + 13;
let danyAge = Math.round(Math.random() * 12);
let mariaAge = Math.round(Math.random() * 52) + 18;

function whichSchool (age) {
  if (age < 13) {
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
}

// Result for Bethany
if (whichSchool(bethanyAge) === "Elementary School") {
  console.log("Bethany should go to Elementary School");
} else if (whichSchool(bethanyAge) === "Secondary School") {
  console.log("Bethany should go to High School"); 
  //Lighthouse Labs solution wanted 'High School', 'Secondary School' causes error!
  //Also, important to omit the periods otherwise error as well.
} else {
  console.log("Bethany should go to Lighthouse Labs");
}

// Result for Dany
if (whichSchool(danyAge) === "Elementary School") {
  console.log("Dany should go to Elementary School");
} else if (whichSchool(danyAge) === "Secondary School") {
  console.log("Dany should go to Secondary School");
} else {
  console.log("Dany should go to Lighthouse Labs");
}

// Result for Maria
if (whichSchool(mariaAge) === "Elementary School") {
  console.log("Maria should go to Elementary School");
} else if (whichSchool(mariaAge) === "Secondary School") {
  console.log("Maria should go to Secondary School");
} else {
  console.log("Maria should go to Lighthouse Labs");
} 