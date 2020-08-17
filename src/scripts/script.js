
async function getData(){
    const postLocation = document.querySelector('.posts');
    const loading = "<p>Loading...</p>";
    const input = document.getElementById('insta').value;

    postLocation.innerHTML = loading

    if(input.length === 0){
        const response = await fetch(`http://localhost:3050/elonmusk`)
        const data = await response.json();
        const htmlList = data.map(({src})=> `<li><img src="${src}"></li>`).join('')
        postLocation.innerHTML = htmlList
    }else{
        const response = await fetch(`http://localhost:3050/${input}`)
        const data = await response.json();
        if(Object.keys(data).length === 1) {
            postLocation.innerHTML = `<p>${data.message}</p>`
        }else{
            const hmtlList = data.map(({src})=> `<li><img src="${src}"></li>`).join('')

            postLocation.innerHTML = hmtlList
        }
    }
};

getData()

document.querySelector('form')
    .addEventListener('submit', event =>{
        event.preventDefault();
        
        getData()
    })