(async()=>{
    const response = await fetch('http://localhost:3000/')
    const data = await response.json();

    const hmtlList = data.map(({src})=> `<li><img src="${src}"></li>`).join('')

    document.querySelector('.container').innerHTML = hmtlList
})();