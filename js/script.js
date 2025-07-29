// Your JS code here
var subTypeElement = document.querySelector(".subsciption");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change",function (e) {
    subType = e.target.value;
    // console.log(subType);
    updateSubscriptionDiv();
  });

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
   console.log(subDuration);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv= function () {
  var monthlyCost = 5; // for basic plan
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText =
    'You have chosen a ${subDuration} month ${subType} plan for $${total}.';
};