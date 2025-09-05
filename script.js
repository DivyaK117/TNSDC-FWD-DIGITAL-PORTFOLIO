document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");

    // Load comments from local storage
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    renderComments();

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const commentText = document.getElementById("comment").value;

        const newComment = { username, commentText };
        comments.push(newComment);

        localStorage.setItem("comments", JSON.stringify(comments));
        renderComments();

        commentForm.reset();
    });

    function renderComments() {
        commentList.innerHTML = "";
        comments.forEach(c => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${c.username}</strong>: ${c.commentText}`;
            commentList.appendChild(li);
        });
    }
});