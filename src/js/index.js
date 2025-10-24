import {fetchGithubUser, fetchGithubUserRepos} from './githubApi.js';
import { renderProfile } from './profileView.js';

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

const BASE_URL = "https://api.github.com";

async function getUserProfile(){
    const userName = inputSearch.value;

    if (!userName) {

        alert("Por favor, digite um nome de usuário do Github.")
        profileResults.innerHTML = "";
        return;
    }

      profileResults.innerHTML = `<p class="loading">Carregando...</p>`
        try {
            const userData = await fetchGithubUser(userName);
            const userRepos = await fetchGithubUserRepos(userName);
            renderProfile(userData, userRepos, profileResults);

        } catch (error) {
            console.error("Erro ao buscar o perfil do usuário:", error);
            alert("Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.")
            profileResults.innerHTML = ""
        }
};

btnSearch.addEventListener("click", getUserProfile);

inputSearch.addEventListener("keyup", (event) => {
    if(event.key === 'Enter'){
        getUserProfile();
    }
});