function saveComment() {
    const commentInput = document.getElementById("commentInput").value;
    if (commentInput.trim()) {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.textContent = commentInput;
        document.getElementById("commentsDisplay").appendChild(commentDiv);
        document.getElementById("commentInput").value = ''; // Clear input field
    } else {
        alert("Please enter a comment.");
    }
}
