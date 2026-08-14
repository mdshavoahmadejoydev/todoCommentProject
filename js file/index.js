


let nickname = document.querySelector("#nickname")
let comment = document.querySelector("#comment")

let publishBtn = document.querySelector(".publishBtn")
let ubdateBtn = document.querySelector(".ubdateBtn")

let cardContainer = document.querySelector(".card-container")

let noPost = document.querySelector(".noPost")

let arr = []
var indexStore;

noPostTitle();

publishBtn.addEventListener("click", ()=> {
  if (nickname.value && comment.value) {
    nickname.style.border = "1.5px solid transparent";
    comment.style.border = "1.5px solid transparent";

    arr.push({
      nickname: nickname.value,
      comment: comment.value,
    });
    cardContainer.innerHTML = "";
    displayStatus();

    noPostTitle();

    nickname.value = "";
    comment.value = "";
  } else {
    if(!nickname.value && !comment.value) {
      nickname.style.border="1.5px solid red";
      comment.style.border="1.5px solid red";
      let speech = new SpeechSynthesisUtterance("Please Write something");
      speechSynthesis.speak(speech);
    } else {
      if(nickname.value) {
        nickname.style.border="1.5px solid transparent";
        comment.style.border="1.5px solid red";
        let speech = new SpeechSynthesisUtterance("Please Write your comment");
        speechSynthesis.speak(speech);
      } else if (comment.value) {
        comment.style.border="1.5px solid transparent";
        nickname.style.border="1.5px solid red";
        let speech = new SpeechSynthesisUtterance("Please Write your nickname");
        speechSynthesis.speak(speech);
      }
    }
  }
})

ubdateBtn.addEventListener("click", ()=> {

  if (nickname.value && comment.value) {
    arr[indexStore].nickname = nickname.value;
    arr[indexStore].comment = comment.value;
    cardContainer.innerHTML = "";
    displayStatus();
    nickname.value = "";
    comment.value = "";
    ubdateBtn.style.display = "none";
    publishBtn.style.display = "inline-block";
    comment.style.border = "1.5px solid transparent";
    nickname.style.border = "1.5px solid transparent";
  } else {
    if (!nickname.value && !comment.value) {
      nickname.style.border = "1.5px solid red";
      comment.style.border = "1.5px solid red";
      let speech = new SpeechSynthesisUtterance("Please Write something");
      speechSynthesis.speak(speech);
    } else {
      if (nickname.value) {
        // nickname.style.border = "1.5px solid transparent";
        // comment.style.border = "1.5px solid red";
        let speech = new SpeechSynthesisUtterance("Please Write your comment");
        speechSynthesis.speak(speech);
        nickname.style.border = "1.5px solid transparent";
        comment.style.border = "1.5px solid red";
      } else if (comment.value) {
        // comment.style.border = "1.5px solid transparent";
        // nickname.style.border = "1.5px solid red";
        let speech = new SpeechSynthesisUtterance("Please Write your nickname");
        speechSynthesis.speak(speech);
        comment.style.border = "1.5px solid transparent";
        nickname.style.border = "1.5px solid red";
      }
    }
  }




  // if (nickname.value && comment.value) {
  //   arr[indexStore].nickname = nickname.value;
  //   arr[indexStore].comment = comment.value;
  //   cardContainer.innerHTML = "";
  //   displayStatus();
  //   nickname.value = "";
  //   comment.value = "";
  //   ubdateBtn.style.display = "none";
  //   publishBtn.style.display = "inline-block";
  // } else {
  //   nickname.style.border="1.5px solid red";
  //   comment.style.border="1.5px solid red";
  //   let speech = new SpeechSynthesisUtterance("Please Write something");
  //   speechSynthesis.speak(speech);
  // }



  // arr[indexStore].nickname = nickname.value;
  // arr[indexStore].comment = comment.value;
  // cardContainer.innerHTML = "";
  // displayStatus();
  // nickname.value = "";
  // comment.value = "";
  // ubdateBtn.style.display="none";
  // publishBtn.style.display="inline-block";
});

function displayStatus() {
  arr.map(status=>{

    cardContainer.innerHTML += `
      <div class="card">
        <div class="nicknameText">${status.nickname}</div>
        <p class="commentText">${status.comment}</p>

        <button class="commonBtn1 editBtn">Edit</button>
        <button class="commonBtn1 deleteBtn">Delete</button>

      </div>
    `
  })

  let deleteBtnNode = document.querySelectorAll(".deleteBtn");
  let deleteBtn = Array.from(deleteBtnNode);
  
  deleteBtn.map((button, index) => {
    button.addEventListener("click", ()=> {
      arr.splice(index, 1)
      cardContainer.innerHTML = "";
      displayStatus();
      noPostTitle();
    })
  })

  let editBtnNode = document.querySelectorAll(".editBtn");
  let editBtn = Array.from(editBtnNode);
  
  editBtn.map((edit, index) => {
    edit.addEventListener("click", ()=>{
      ubdateBtn.style.display="inline-block";
      publishBtn.style.display="none";
      nickname.value = arr[index].nickname;
      comment.value = arr[index].comment;
      
      indexStore = index;
    })
  })


}


function noPostTitle() {
  if (arr.length === 0) {
    noPost.style.display="block"
  } else {
    noPost.style.display="None"
  }
}