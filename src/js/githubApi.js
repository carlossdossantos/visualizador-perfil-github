const BASE_URL = "https://api.github.com";
const repositoiresQuantity = 10;

export async function fetchGithubUser(userName){
    const response = await fetch(`${BASE_URL}/users/${userName}`);
    if(!response.ok) {
        throw new Error('Usuário não encontrado.');
    }
    return await response.json();
}

export async function fetchGithubUserRepos(userName){
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=${repositoiresQuantity}&sort=created`);
    if(!response.ok) {
        throw new Error('Repositórios não encontrado');
    }
    return await response.json();
}