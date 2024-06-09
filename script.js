const postVideo = document.querySelectorAll(".post-video");
const videoPlayer = document.querySelectorAll(".video-player");
const post = document.querySelectorAll(".post");
let isPlaying = true;

postVideo.forEach((item, index) => {
  item.loop = true;
  item.autoBuffer = true;
  videoPlayer[index].addEventListener("click", function () {
    isPlaying ? pauseVideo(index) : playVideo(index);
  });
});

function playVideo(index) {
  postVideo[index].play();
  isPlaying = true;
}

function pauseVideo(index) {
  postVideo[index].pause();
  isPlaying = false;
}

// like button
const likeBtn = document.querySelectorAll(".like-btn");
const likeBtnIcon = document.querySelectorAll(".like-icon");
const likeBtnNum = document.querySelectorAll(".like-number");
let isLiked = false;

likeBtn.forEach((item, index) => {
  likeBtn[index].addEventListener("click", function () {
    let likeNum = Math.floor(likeBtnNum[index].innerText);
    isLiked ? unLikePost(index, likeNum) : likePost(index, likeNum);
  });
});

function likePost(index, likeNum) {
  isLiked = true;
  likeBtnIcon[index].classList.replace("fa-heart-o", "fa-heart");
  likeBtnNum[index].innerText = likeNum + 1;
}

function unLikePost(index, likeNum) {
  isLiked = false;
  likeBtnIcon[index].classList.replace("fa-heart", "fa-heart-o");
  likeBtnNum[index].innerText = likeNum - 1;
}

// post comment box
const postComments = document.querySelectorAll(".post-comments");
const commentBtn = document.querySelectorAll(".comment-btn");
const commentClose = document.querySelectorAll(".close-comment");

postComments.forEach((item, index) => {
  commentBtn[index].addEventListener("click", function () {
    postComments[index].classList.add("open");
  });

  commentClose[index].addEventListener("click", function () {
    postComments[index].classList.remove("open");
  });
});

//add comments to post
const postCommentSendBtn = document.querySelectorAll(".send-btn");
const postCommentText = document.querySelectorAll(".post-comment-text");
const postCommentArea = document.querySelectorAll(".post-comments-area");

postCommentSendBtn.forEach((item, index) => {
  if (postCommentText[index].value == "") {
    window.addEventListener("keydown", (evnt) => {
      if (evnt.keyCode == 13) submitComment();
    });
  }
  postCommentSendBtn[index].addEventListener("click", function () {
    if (postCommentText[index].value != "") {
      const postComment = document.createElement("div");
      const postCommentUser = document.createElement("div");
      const postCommentContent = document.createElement("div");
      const postCommentLikeBtn = document.createElement("div");

      postCommentUser.setAttribute("class", "post-comment-user");
      postCommentUser.classList.add("verified");
      const postCommentUserImg = document.createElement("img");
      postCommentUserImg.setAttribute("class", "post-comment-user-img");
      postCommentUserImg.setAttribute("src", "http://dankmemeryt.000webhostapp.com/wp-content/uploads/2020/12/logo.webp");
      postCommentUser.appendChild(postCommentUserImg);

      postCommentContent.setAttribute("class", "post-comment-content");
      const postCommentUserName = document.createElement("div");
      const postCommentUserMsg = document.createElement("div");
      postCommentUserName.setAttribute("class", "post-comment-user-name");
      postCommentUserName.classList.add("verified");
      postCommentUserName.innerHTML = "<a href='#'>theviralboy.ig</a>";
      if (postCommentUserName == "verified") {
        const postCommentUserVerifiedIcon = document.createElement(i);
        postCommentUserVerifiedIcon.setAttribute("class", "fa fa-check post-comment-user-verified");
        postCommentUserName.appendChild(postCommentUserVerifiedIcon);
      }
      postCommentUserMsg.setAttribute("class", "post-comment-user-msg");
      postCommentUserMsg.innerText = postCommentText[index].value;
      postCommentContent.appendChild(postCommentUserName);
      postCommentContent.appendChild(postCommentUserMsg);

      postCommentLikeBtn.setAttribute("class", "post-comment-like-btn");
      const postCommentLikeBtnIcon = document.createElement("i");
      postCommentLikeBtnIcon.setAttribute("class", "fa fa-heart-o post-comment-like-icon");
      const postCommentLikeNum = document.createElement("p");
      postCommentLikeNum.setAttribute("class", "post-comment-like-number");
      postCommentLikeNum.innerText = "0";
      postCommentLikeBtn.appendChild(postCommentLikeBtnIcon);
      postCommentLikeBtn.appendChild(postCommentLikeNum);

      postComment.setAttribute("class", "post-comment");
      postComment.appendChild(postCommentUser);
      postComment.appendChild(postCommentContent);
      postComment.appendChild(postCommentLikeBtn);

      postCommentArea[index].appendChild(postComment);
      postCommentText[index].value = "";
    }
  });
});
