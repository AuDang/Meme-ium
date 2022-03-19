
const likeButtonClick = document.getElementById(`likeButton`);


likeButtonClick.addEventListener("click", async (event) => {
    const url = window.location.href;
    const strs = url.split('/');
    const memeId = strs.at(-1)

    const fetchedlikes = await likeFetch.json();


    // const memeId = event.target.split('-')[1];
    if()
        const likeFetch = await fetch(`/meme/${memeId}`, {
            method: 'PATCH',
            body: JSON.stringify({}),
            headers: { 'Content-Type': 'application/json' }
        })
        const likeCountText = document.getElementById('countId');
        //count id should go below
        likeCountText.innerHTML = ????

    }else{
        const likeFetch = await fetch(`/meme/${memeId}`, {
            method: 'PATCH',
            body: JSON.stringify({}),
            headers: { 'Content-Type': 'application/json' }
        })
    };





})
