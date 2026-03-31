const usernameInput = document.getElementById("username-input");
const searchBtn = document.getElementById("search-btn");
const resultsDiv = document.getElementById("results");

searchBtn.addEventListener("click", searchUsers);

usernameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchUsers();
    }
});

function searchUsers() {
    const query = usernameInput.value.trim();

    if (query === "") {
        alert("Kérlek adj meg egy keresőkifejezést!");
        return;
    }

    resultsDiv.innerHTML = '<p class="message">Keresés folyamatban...</p>';

    fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`, {
        headers: {
            Accept: "application/vnd.github+json"
        }
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Hiba történt az API hívás során.");
            }
            return response.json();
        })
        .then(function (data) {
            displayUsers(data.items);
        })
        .catch(function (error) {
            resultsDiv.innerHTML = `<p class="message">${error.message}</p>`;
        });
}

function displayUsers(users) {
    resultsDiv.innerHTML = "";

    if (!users || users.length === 0) {
        resultsDiv.innerHTML = '<p class="message">Nincs találat.</p>';
        return;
    }

    users.forEach(function (user) {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        userCard.innerHTML = `
            <img src="${user.avatar_url}" alt="${user.login} profilképe">
             <h3>${user.login}</h3>
            <a href="user.html?id=${user.login}">Profil megnyitása</a>
            `;
        resultsDiv.appendChild(userCard);
    });
}