// Your JS code here
var subTypeElement = document.querySelector("Subsciption");
var subDurationElement = document.querySelector("months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change"),
  function (e) {
    subType = e.target.value;
    // consolte.log(subType);
    updateSubscriptionDiv();
  };

subDSurationElement.addEventListener("Change", function (e) {
  subDuration = Number(e - target.value);
  // console.loig(subDuration);
  updateSubscriptionDiv();
});

var updateSubcriptionDiv = function () {
  var monthlyCost = 5; // for basic plan
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDueation * monthlyCost;
  result.innerTex =
    "You have chosen a $ {subDuration} month ${subType} plan for $${total}.";
};
