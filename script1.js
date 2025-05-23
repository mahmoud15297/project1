const api = "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";
const inp = document.getElementById('inp')
const images = document.querySelector('.images')


const getImage = async () => {
    ////// make a request to openia api ////////
    const methods = {
        method:"POST",
        Headers:{
            "content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":inp.value,
                "n":3,
                "size":"256x256"
            }
        )
    }

    const res = await fetch("https://api.openai.com/v1/images/generations", methods)
    /////// parse the response as json ////////
    const data = await res.json()
    const listImages = data.data;
    images.innerHTML = ''
    listImages.map(photo =>{
        const container = document.createElement("div")
        images.append(container);
        const img = document.createElement("img")
        container.append(img)
        img.src = photo.url
    })
}
