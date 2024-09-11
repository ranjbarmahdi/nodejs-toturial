const list = document.querySelector(".list-group");
list.addEventListener("click", async (event) => {
    const target = event.target;
    const id = parseInt(target.parentElement.dataset.id);
    if (target.classList.contains("toggle-btn")) {
        try {
            const response = await axios.post("/toggle-task", { id });
            if (response.data === true) {
                location.reload();
            } else {
                alert(response.data);
            }
        } catch (e) {
            alert(e.response.data);
        }
    } else if (target.classList.contains("edit-btn")) {
        const oldTitle = target.parentElement.querySelector("label").innerText;
        const title = prompt("Please Enter New Title", oldTitle);
        console.log(title);
        if (!title.trim()) {
            alert("Enter Title");
        }
        try {
            const response = await axios.post("/edit-task", { id, title });
            if (response.data === true) {
                location.reload();
            } else {
                alert(response.data);
            }
        } catch (e) {
            alert(e.response.data);
        }
    } else if (target.classList.contains("delete-btn")) {
        if (confirm("Are you Shure?")) {
            try {
                const response = await axios.post("/delete-task", { id });
                if (response.data === true) {
                    location.reload();
                } else {
                    alert(response.data);
                }
            } catch (e) {
                alert(e.response.data);
            }
        }
    }
});
