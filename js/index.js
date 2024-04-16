document.addEventListener("DOMContentLoaded",() =>{
    let form = document.querySelector("form")


// initializing the event
form.addEventListener('submit',(event) =>{

    event.preventDefault();

    const users = event.target.search.value

    const ul = document.querySelector('#user-list')

    ul.innerHTML = ''

    fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then(objects => {
        for(let i = 0;i < objects.items.length; i++){
            const  user =objects.items[1];

            const userName = document.createElement('a')
            userName.href = user.html_url;
            console.log(userName.href);

            userName.textContent = user.login;

console.log(userName)
            const avatar = document.createElement('img')

           // userName.textContent =`$ {objects.items[i].login}`
            avatar.src = user.avatar_url;

            avatar.alt =`user_avatar`

           
            li.appendChild(userName)
            li.appendChild(avatar)

            ul.appendChild(li)
        }
    })
    .catch(error => console.error('Error fetching users:', error));
})
})