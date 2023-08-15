const $ = document
let filterIcon = $.querySelector('.filter-icon')
let filters = $.querySelectorAll('.filters')

// this functions for toggle filter in magazine page

filters.forEach(function (filter) {
    
    filter.addEventListener('click', function (event) {
        let filterActive = $.querySelector('.active-filter')
        filterActive.classList.remove('active-filter')

        filter.classList.add('active-filter')
    })
    
})





function togglerFilter() {

    filters.forEach(function (filter) {
        filter.classList.toggle('active-filter')
    })
}





filterIcon.addEventListener('click', togglerFilter)
