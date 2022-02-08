
// get search form and page links
let searchForm = document.getElementById('searchForm')
let pageLinks = document.getElementsByClassName('page-link')

// ensure search form exists
if (searchForm) {
    for (let i = 0; i < pageLinks.length; i++) {
        pageLinks[i].addEventListener('click', function (e) {
            e.preventDefault()

            // get the data attribute
            let page = this.dataset.page

            // add hidden search input to form
            searchForm.innerHTML += `<input value=${page} name="page" hidden />`

            // submit form
            searchForm.submit()
        })
    }
}

let tags = document.getElementsByClassName('project-tag')

for (let i = 0; i < tags.length; i++) {
    tags[i].addEventListener('click', (e) => {
        let tagId = e.target.dataset.tag
        let projectId = e.target.dataset.project

        fetch('https://devv-search.herokuapp.com/api/remove-tag/', {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ 'project': projectId, 'tag': tagId })
        })
            .then(res => res.json())
            .then(data => {
                e.target.remove()
            })
    })
}