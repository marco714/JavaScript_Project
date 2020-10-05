const APIURL = 'https://api.github.com/users/florinpop17'
const myDate = new Date(1601868488 * 1000)

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getUser("marco714");

async function getUser(username){
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();
    console.log(respData)

    createUserCard(respData);
    getRepos(username)
}

async function getRepos(username){
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    addReposToCard(respData)
}

function addReposToCard(repos){
    const reposEl = document.getElementById("repos");

    repos.forEach(function (repo){
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo');

        repoEl.href = repo.html_url;
        repoEl.target = "_blank"
        repoEl.innerText = repo.name;

        reposEl.appendChild('repoEl')
    })
}

function createUserCard(user){
    const cardHTML = `
        <div class="card">
            <div class="img-container">
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul class="info">
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

                <div class="repos" id="repos">
                </div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;

}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const user = search.value;

    if (user){
        getUser(user);
        search.value = ""
    }
})