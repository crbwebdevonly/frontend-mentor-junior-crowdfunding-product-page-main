const threeBars = document.getElementById("three-bars");
const cross = document.getElementById("cross");
//const menuList = document.getElementById("menu-list")

const mobileMenu = document.getElementById("mobile-menu-container");
const desktopMenu = document.getElementById("desktop-menu-list");

const progressBar = document.querySelector(".progress-bar");

console.log(threeBars, cross, mobileMenu, desktopMenu, progressBar);

//staru up check
const doWindowWidthCheck = () => {
     if (window.innerWidth > 700) {
          threeBars.className = "three-bars hide";
          cross.className = "cross hide";

          mobileMenu.className = "mobile-menu-container hide";

          desktopMenu.className = "desktop-menu-list";
     }

     if (window.innerWidth < 700) {
          threeBars.className = "three-bars";
          cross.className = "cross hide";
          mobileMenu.className = "mobile-menu-container hide";

          desktopMenu.className = "desktop-menu-list hide";
     }
};

//
doWindowWidthCheck();

threeBars.addEventListener("click", () => {
     // mobile
     threeBars.classList.toggle("hide");
     cross.classList.toggle("hide");
     mobileMenu.classList.toggle("hide");

     //menuList.className = "menu-list "
});
cross.addEventListener("click", () => {
     threeBars.classList.toggle("hide");
     cross.classList.toggle("hide");
     mobileMenu.classList.toggle("hide");
});

window.addEventListener("resize", () => {
     doWindowWidthCheck();
});

//

//bookmark
const bookmarkWrap = document.getElementById("bookmark-wrap");
//const bookmarkIcon = document.getElementById("bookmark-icon")
//const bookmarkButton = document.getElementById("bookmark-button")
//console.log(bookmarkButton,bookmarkIcon,bookmarkWrap)
//let isBookmarked = false

bookmarkWrap.addEventListener("click", () => {
     //console.log("booked");
     bookmarkWrap.classList.toggle("clicked");
     //bookmarkIcon.classList.toggle("clicked");
});

//amount
let startingAmount = 89914;
let progressBarWidth = (startingAmount * 100) / 100000;
let addAmount = 0;
const amount = document.getElementById("collected-amount");
amount.innerText = "$" + startingAmount;
console.log(parseInt(amount.innerText));

//number of backers
let startingBacker = 5007;
const backers = document.getElementById("backers");
backers.innerText = startingBacker;

// initialProgessbar
progressBarWidth = (startingAmount * 100) / 100000;
console.log("progessbar>>", progressBarWidth);
progressBar.style.width = `${progressBarWidth}%`;

//back project
const backProjectButton = document.getElementById("back-project");
backProjectButton.addEventListener("click", () => {
     //console.log("backed");
     selectionModal.className = "selection-modal-container";
});

//selection-modal
const selectionModal = document.getElementById("selection-modal");
const closeSelectionModal = document.querySelector(".close-cross");
//
closeSelectionModal.addEventListener("click", () => {
     //selectionModal.className = "selection-modal-container hide";

     //reset all
     successModal.className = "success-modal-container hide";
     selectionModal.className = "selection-modal-container hide";

     pledgeSelectedNoReward.className = "pledge-selected hide";
     pledgeSelected25.className = "pledge-selected hide";
     pledgeSelected75.className = "pledge-selected hide";
     pledgeSelected200.className = "pledge-selected hide";
     radioButtonsArray.forEach((e) => {
          e.checked = false;
     });
     addAmount = 0;
});

//selected pledge
const pledgeSelectedNoReward = document.getElementById("no-reward");
const pledgeSelected25 = document.getElementById("25");
const pledgeSelected75 = document.getElementById("75");
const pledgeSelected200 = document.getElementById("200");
console.log(
     pledgeSelectedNoReward,
     pledgeSelected25,
     pledgeSelected75,
     pledgeSelected200
);

const radioButtonsArray = document.querySelectorAll(`input[name="pledge"]`);
//console.log(radioButtonsArray[3].value)
//radioButtonsArray[0].addEventListener("click",()=>{console.log("r")})
radioButtonsArray.forEach((e) =>
     e.addEventListener("click", () => {
          //console.log("r", e.value);
          if (e.value === "no-reward") {
               console.log("norewar");
               pledgeSelectedNoReward.className = "pledge-selected";
               console.log(
                    pledgeSelectedNoReward,
                    pledgeSelected25,
                    pledgeSelected75,
                    pledgeSelected200
               );
          } else {
               pledgeSelectedNoReward.className = "pledge-selected hide";
          }
          if (e.value === "25") {
               pledgeSelected25.className = "pledge-selected";

               //let oldAmount = document.getElementById("collected-amount");
               // oldAmount.innerText = "$" + ( oldAmount + 25);
               // amount.innerText = "$" + startingAmount;
          } else {
               pledgeSelected25.className = "pledge-selected hide";
          }
          if (e.value === "75") {
               pledgeSelected75.className = "pledge-selected";
          } else {
               pledgeSelected75.className = "pledge-selected hide";
          }
          if (e.value === "200") {
               pledgeSelected200.className = "pledge-selected";
          } else {
               pledgeSelected200.className = "pledge-selected hide";
          }
     })
);

//success modal
const successModal = document.getElementById("success-modal");
const buttonGotIt = document.getElementById("success-got-it");
buttonGotIt.addEventListener("click", () => {
     //console.log("got-it")

     //update amount
     startingAmount += addAmount;
     amount.innerText = "$" + startingAmount;

     //update backers
     startingBacker += 1;
     backers.innerText = startingBacker;

     //update Progessbar
     progressBarWidth = (startingAmount * 100) / 100000;
     console.log("progessbar>>", progressBarWidth);
     progressBar.style.width = `${progressBarWidth}%`;
     // progressBar.style.width = `50%`

     //reset all
     successModal.className = "success-modal-container hide";
     selectionModal.className = "selection-modal-container hide";

     pledgeSelectedNoReward.className = "pledge-selected hide";
     pledgeSelected25.className = "pledge-selected hide";
     pledgeSelected75.className = "pledge-selected hide";
     pledgeSelected200.className = "pledge-selected hide";
     radioButtonsArray.forEach((e) => {
          e.checked = false;
     });
     addAmount = 0;
});

//continue button
const continue0 = document.getElementById("continue-0");
continue0.addEventListener("click", () => {
     console.log("clicked0");
     addAmount = 0;
     successModal.className = "success-modal-container";
});

const continue25 = document.getElementById("continue-25");
continue25.addEventListener("click", () => {
     //console.log("clicked25");
     addAmount = 25; //25
     successModal.className = "success-modal-container";
});

const continue75 = document.getElementById("continue-75");
continue75.addEventListener("click", () => {
     // console.log("clicked75");
     addAmount = 75;
     successModal.className = "success-modal-container";
});

const continue200 = document.getElementById("continue-200");
continue200.addEventListener("click", () => {
     //console.log("clicked200");
     addAmount = 200;
     successModal.className = "success-modal-container";
});

//selectbuttom
const select25 = document.getElementById("select25");
const select75 = document.getElementById("select75");
const select200 = document.getElementById("select200");

select25.addEventListener("click", () => {
     console.log("sel25");
     selectionModal.className = "selection-modal-container";
     pledgeSelected25.className = "pledge-selected";
     radioButtonsArray[1].checked = true;
});
select75.addEventListener("click", () => {
     console.log("sel75");
     selectionModal.className = "selection-modal-container";
     pledgeSelected75.className = "pledge-selected";
     radioButtonsArray[2].checked = true;
});
select200.addEventListener("click", () => {
     console.log("sel200");
     selectionModal.className = "selection-modal-container";
     pledgeSelected200.className = "pledge-selected";
     radioButtonsArray[3].checked = true;
});
