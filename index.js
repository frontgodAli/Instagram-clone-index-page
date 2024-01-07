const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let container=document.getElementById("container")

function renderPostsJs(){
    let htmlJs=""
    for(let i=0;i<posts.length;i++){
        htmlJs+=`<div class="newPost">
        <section class="post-header">
        <img class="user-avatar" src=${posts[i].avatar} alt="">
        <div class="p-wrapper">
            <p class="author">${posts[i].name}</p>
            <p class="location">${posts[i].location}</p>
        </div>
    </section>
    <section>
        <img class="user-post like" src=${posts[i].post} alt="">
        <div class="tools">
            <img class="icon like" src="images/icon-heart.png" alt="like icon">
            <img class="icon" src="images/icon-comment.png" alt="comment icon">
            <img class="icon" src="images/icon-dm.png" alt="share icon">
            <p class="bold-text likes">${posts[i].likes} likes</p>
            <p><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
    </section>
    </div>`
    }
container.innerHTML+=htmlJs
}
renderPostsJs()
