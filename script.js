function getNewsData() {
    fetch("http://localhost:3000/articles")
    .then(response => { 
        return response.json()
    })
    .then(data => {
       createNewsLists(data)
    })

}

//Creating lists of titles of the News 
function createNewsLists(data){
    const ulList = document.getElementById("lists")

    data.forEach((Titles) => {
        const titleLists = document.createElement("li")
        titleLists.classList = "Options"
        titleLists.innerText = Titles.title
        ulList.appendChild(titleLists)          
        
        //Event Listener
        titleLists.addEventListener("click", function () {
            showArticlesDetails(Titles)
        })

    })

}

function showArticlesDetails (articleData) {

    const idData = document.getElementById("listsData")
    console.log(articleData)
    const source = document.createElement("p")
    source.innerText = "Source: " + articleData.source['name']
    const author = document.createElement("p")
    author.innerText = "author: " + articleData.author
    const title = document.createElement("p")
    title.innerText = "title: " + articleData.title
    const description = document.createElement("p")
    description.innerText = "description: " + articleData.description
    const url = document.createElement("p")
    url.innerText = "url: " + articleData.url
    const urlToImage = document.createElement("img")
    urlToImage.src = articleData.urlToImage
    const publishedAt = document.createElement("p")
    publishedAt.innerText = "publishedAt: " + articleData.publishedAt
    const content = document.createElement("p")
    content.innerText = "content: " + articleData.content




    //Append The Content To The DOM

    idData.innerText = ""
    idData.appendChild(source)
    idData.appendChild(author)
    idData.appendChild(title)
    idData.appendChild(description)
    idData.appendChild(url)
    idData.appendChild(urlToImage)
    idData.appendChild(publishedAt)
    idData.appendChild(content)
    
}




document.addEventListener("DOMContentLoaded", (e) => {
    getNewsData() 
})
