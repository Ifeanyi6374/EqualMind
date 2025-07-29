/*age checker*/
function checkAge() {
  var message = document.getElementById("result");
  var age = document.getElementById("age").value;
  if (age >= 15)
    message.innerHTML = "You are eligible to volunteer with us or any of these organizations!";
  else
    message.innerHTML = "You are not eligible to volunteer with us or any of these organizations.";
}
/*facts generator*/
var facts = [
  "Learning poverty is real: As of recent estimates, over 50% of 10-year-olds in low- and middle-income countries cannot read or understand a simple story, a condition known as learning poverty.",

    "Early childhood education has lifelong effects: High-quality early education (before age 5) is linked to better health, higher income, and reduced crime rates in adulthood—even more than later schooling.",

  "  Education reduces child marriage: Girls with secondary education are up to six times less likely to marry as children compared to those with little or no education.",

  "  Illiteracy isn’t just a developing country issue: Around 1 in 5 adults in the U.S. read below a 5th-grade level, affecting job access, health outcomes, and civic participation.",

      "Teachers are undervalued globally: In many countries, especially in sub-Saharan Africa, over 50 students share one teacher, often with minimal training or support.",

      "Education is the most powerful tool against poverty: One extra year of schooling can increase an individual’s earnings by 10% on average, and each additional year of education for girls can reduce child mortality by up to 10%.",

      "Conflict and disasters disrupt education massively: Nearly 224 million children worldwide are affected by crises that limit or block their access to school, including war, climate events, and displacement.",

      "Digital access is a new divide: Over 2.6 billion people worldwide still lack internet access, making online learning inaccessible for many—especially in rural or low-income areas."
,
      "Multilingual children may learn slower at first but perform better long-term: Children raised speaking more than one language often have delayed early vocabulary, but tend to develop stronger cognitive flexibility and problem-solving skills later.",

      "Investing in girls' education boosts GDP: Closing gender gaps in education could add $112–$152 billion a year to economies in low-income countries."
];

var button = document.getElementById("generator");
var count = 0;
function generateFact(){
    document.getElementById("fact").innerHTML = facts[count];
  count++;

  if (count == facts.length){
    count = 0;
  }
}
