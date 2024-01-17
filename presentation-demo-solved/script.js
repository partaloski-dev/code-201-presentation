const users = [
  "andrea",
  "blagoj",
  "frosina",
  "hristijan",
  "ivan",
  "petar",
  "slavica",
  "vedran",
];
const comments = [];

const Comment = function (username, comment) {
  this.username = username;
  this.comment = comment;
};

function getCapitalizedUsername(username) {
  return username.slice(0, 1).toLocaleUpperCase() + username.slice(1);
}

function onFormSubmit(event) {
  event.preventDefault();

  const usernameInput = event.target.username;
  const commentInput = event.target.comment;

  const usernameValue = usernameInput.value;
  const commentValue = commentInput.value;

  if (usernameValue === "" || commentValue === "") {
    alert('Fields "Username" and "Comment" are required!');
    return;
  }

  if (!users.includes(usernameValue)) {
    alert("User not found! Please input a valid username!");
    return;
  }

  const newComment = new Comment(usernameValue, commentValue);
  comments.push(newComment);

  renderAllComments();

  usernameInput.value = "";
  commentInput.value = "";
}

Comment.prototype.render = function () {
  return `<div class="comment"><span class="comment-username">${getCapitalizedUsername(
    this.username
  )}:</span><span class="comment-content">${this.comment}</span></div>`;
};

function renderUsernames() {
  const container = document.getElementById("usernames-container");

  users.sort();
  console.log(users);

  for (let i = 0; i < users.length; i++) {
    container.innerHTML += `<li>${users[i]}${
      i === users.length - 1 ? "" : ","
    }</li>`;
  }
}

function renderAllComments() {
  const container = document.getElementById("comment-container");

  container.innerHTML = "";

  for (let i = 0; i < comments.length; i++) {
    container.innerHTML = container.innerHTML + comments[i].render();
  }
}

const addCommentForm = document.getElementById("add-comment-form");
addCommentForm.addEventListener("submit", onFormSubmit);

renderUsernames();
