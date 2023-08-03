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

const mainEl     = document.getElementById("main-el")
let check = localStorage.getItem("likes-array")
let initialLikesArray = []

if (check){
    initialLikesArray = JSON.parse(check)
}
else{
    for (let i = 0; i<posts.length; i++)
    {
        initialLikesArray.push(posts[i].likes)
    }
}

localStorage.setItem("likes-array", JSON.stringify(initialLikesArray))
let likeCountStringFromDb = localStorage.getItem("likes-array")
let likeCountObjectFromDb = JSON.parse(likeCountStringFromDb)

render()

function render(){
    for(let i=0; i<posts.length; i++)
    {
        //create section tag
        let newSection = document.createElement("section")
        mainEl.append(newSection) 
        //create div
        let divTwo = document.createElement("div")
        divTwo.setAttribute("class","container-two")
        newSection.append(divTwo)
        //create Img tag
        let avatarEl = document.createElement("img")
        avatarEl.setAttribute("class","user-img") 
        avatarEl.setAttribute("src", `${posts[i].avatar}`)
        avatarEl.setAttribute("alt","vangogh avatar")
        divTwo.append(avatarEl)
        //create div inside divTwo
        let divThree = document.createElement("div")
        divTwo.append(divThree)
        //create nameEl inside divThree
        let nameEl = document.createElement("p")
        nameEl.setAttribute("class","bold")
        nameEl.textContent = posts[i].name
        divThree.append(nameEl)
        //create locationEl inside divThree
        let locationEl = document.createElement("p")
        locationEl.textContent = posts[i].location
        divThree.append(locationEl)
        //create postImg inside newSection
        let postImg = document.createElement("img")
        postImg.setAttribute("class", "post-img")
        postImg.setAttribute("src", `${posts[i].post}`)
        newSection.append(postImg)
        //create div "icons" inside newSections
        let divIcons = document.createElement("div")
        divIcons.setAttribute("class", "icons")
        newSection.append(divIcons)
        //create 3 icons inside divIcons
        let iconHeart = document.createElement("i")
        iconHeart.setAttribute("class", "fa-regular fa-heart")
        iconHeart.addEventListener("click", function (){
            likeCountObjectFromDb[i] += 1 
            localStorage.setItem("likes-array", JSON.stringify(likeCountObjectFromDb))
            likeNumSpan.textContent = likeCountObjectFromDb[i] 
        })
        divIcons.append(iconHeart)
        //
        let iconComment = document.createElement("i")
        iconComment.setAttribute("class", "fa-regular fa-comment")
        divIcons.append(iconComment)
        //
        let iconRetweet = document.createElement("i")
        iconRetweet.setAttribute("class", "fa-solid fa-retweet")
        divIcons.append(iconRetweet)
        // create likesParagraph inside newSection
        let likesParag = document.createElement("p")
        newSection.append(likesParag)
        //create 2 spans that lives inside likesParag
        let likeNumSpan =  document.createElement("span")
        likeNumSpan.setAttribute("class", "bold")
        likeNumSpan.textContent = likeCountObjectFromDb[i] 
        likesParag.append(likeNumSpan)
        //
        let likeSpan = document.createElement("span")
        likeSpan.textContent = " Likes"
        likesParag.append(likeSpan)
        //create commentsEl that lives inside newSection
        let commentsEl = document.createElement("p")
        newSection.append(commentsEl)
        //create userNameSpan that lives inside commentsEl
        let userNameSpan = document.createElement("span")
        userNameSpan.setAttribute("class", "bold")
        userNameSpan.textContent = posts[i].username
        commentsEl.append(userNameSpan)
        // create commentSpan that lives inside commentsEl
        let commentSpan = document.createElement("span")
        commentSpan.textContent = " " + posts[i].comment
        commentsEl.append(commentSpan)
    }
}

/* <section>
<div class="container-two">
    <img class="user-img" id="avatar-el" src="images/avatar-vangogh.jpg" alt="vangogh avatar">
    <div>
        <p class="bold" id="name-el">Vincent van Gogh</p>
        <p id="location-el">Zundert, Netherlands</p>    
    </div>
</div>

<img class="post-img" id="post-el" src="images/post-vangogh.jpg" alt="Portrait of Vangogh">

<div class="icons">
    <i class="fa-regular fa-heart"></i>
    <i class="fa-regular fa-comment"></i>
    <i class="fa-solid fa-retweet"></i>
</div>

<p class="bold"><span id="like-el">21492</span> Likes</p>

<p><span class="bold" id="username-el">vincey1853</span><span id="comment-el"> just took a few mushrooms lol</span></p>

</section> */