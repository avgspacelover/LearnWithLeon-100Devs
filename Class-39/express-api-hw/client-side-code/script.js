const imageDiv = document.querySelector('#image-div');
const btn = document.getElementById('btn');

const image = document.createElement('img');

image.id = "ftchimg"

async function getLink(){
    const index= Math.floor(Math.random()*(10-0) + 0)
    const imageData = await fetch(`https://ant-skateboard-scenery.herokuapp.com/${index}`);
    const imageLink = await imageData.json()
    image.src = imageLink.url;
    image.alt= `${imageLink}`
}

btn.addEventListener('click', ()=> {
    getLink();
})


imageDiv.appendChild(image);