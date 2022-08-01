document.getElementById("sec-link").addEventListener((e)=>{
    e.preventDefault()

    document.getElementById("section").scrollIntoView({behavior:'smooth'})
})