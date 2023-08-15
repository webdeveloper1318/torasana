
// INDEX OFFCANVAS //

let indexBtn = document.querySelector('.indexBtn')
let indexBox = document.querySelector('.indexBox')
let Index_backdrop = document.querySelector('.offcanvasIndex-backdrop')




function showIndex() {
    indexBox.classList.toggle('left-0')
    Index_backdrop.classList.toggle('show')
}



function closeOffcanvasIndex() {
    indexBox.classList.toggle('left-0')
    Index_backdrop.classList.toggle('show')
}





indexBtn.addEventListener('click', showIndex)
Index_backdrop.addEventListener('click', closeOffcanvasIndex)



// INDEX OFFCANVAS //




// PAGINATION CONTENT //

let nextBtn = document.querySelector('.nextBtn')
let prevBtn = document.querySelector('.prevBtn')
let content = document.querySelector('.content')

let pages = document.querySelectorAll('.page')

let addPage = document.querySelector('.addPage')
let minPage = document.querySelector('.minPage')
let currentPageInput = document.querySelector('.currentPageInput')

let formInput = document.querySelector('.formInput')






var currentPage = 1         //this is the Global Variable for current page

let maxPage = content.children.length


let pagesArray = Object.values(pages)





function scrollContent() {



    pagesArray.find(function (page) {

        if(content.scrollTop > page.offsetTop - 250 && content.scrollTop < page.offsetTop + page.scrollHeight)
        {
            currentPage = page.dataset.page
        }

        else{

            currentPage = currentPage
        }

    })
    
    

    changeInput()






    
    // var observer = new IntersectionObserver(function(entries) {
    //     // isIntersecting is true when element and viewport are overlapping
    //     // isIntersecting is false when element and viewport don't overlap
    //     if(entries[0].isIntersecting === true)
    //         console.log('Element has just become visible in screen');
    //         currentPage++
    // }, { threshold: [0.5] });
    
    // observer.observe(selectedPage);

    
//   let findIndexPage = pagesArray.findIndex(function (page) {
        
//         var offBottom = (page).offsetTop + $(page).outerHeight();

//         if(content.scrollTop > page.offsetTop && content.scrollTop < offBottom)
//         {
//             return page
//         }
    
//     })

//     console.log('findIndex: '+findIndexPage);

//     if(findIndexPage === -1)
//     {
//         findIndexPage = currentPage
//     }
    
//     else if(findIndexPage === 0)
//     {
//         findIndexPage = 1

//         currentPage = findIndexPage
//     }
//     else{
//         currentPage = findIndexPage++
//     }
//     changeInput()
    



// console.log(currentPage);






    // // console.log(selectedPage);
    // // console.log(selectedPage);
    // console.log(selectedPage.offsetTop);  //1

    // console.log(content.scrollTop);


    // const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    //     const { top, left, bottom, right } = el.getBoundingClientRect();
    //     const { innerHeight, innerWidth } = window;
    //     return partiallyVisible
    //       ? ((top > 0 && top < innerHeight) ||
    //           (bottom > 0 && bottom < innerHeight))
    //       :alert()
    //   };
      
    //   // e.g. 100x100 viewport and a 10x10px element at position {top: -1, left: 0, bottom: 9, right: 10}
    //   elementIsVisibleInViewport(selectedPage); // false - (not fully visible)
    //   elementIsVisibleInViewport(selectedPage, true); // true - (partially visible)




    // if (content.scrollTop > selectedPage.offsetTop - 60) {

    //     currentPage++
        

    //     changeInput()

    //     console.log('currentPage 1 is: ' + currentPage);


    //     // selectedPage = document.querySelector(`.page[data-page="document{currentPage}"]`)

    //     // if(content.scrollTop > selectedPage.offsetTop)
    //     // {
    //     //     currentPage++
    //     //     console.log('currentPage 2 is: '+ currentPage);
    //     // }



    // }





}













function nextPage() {

    currentPage++


    if (currentPage > maxPage) {
        currentPage = maxPage
    }


    let selectedPage = document.querySelector(`.page[data-page="${currentPage}"]`)


    changeInput()

    scroller(selectedPage)

}





function prevPage() {

    currentPage--

    if (currentPage < 1) {
        currentPage = 1
    }



    let selectedPage = document.querySelector(`.page[data-page="${currentPage}"]`)

    
    changeInput()
 
    scroller(selectedPage)

}







function changeInput() {

    if (currentPageInput.value > maxPage) {
        currentPageInput.value = maxPage
    }

    else if (currentPageInput.value < 1) {
        currentPageInput.value = 1
    }

    currentPageInput.value = currentPage
}




function optionalPage(event) {




    if (event.keyCode === 13) {
        event.preventDefault()

        if (!currentPageInput.value) {
            currentPageInput.value = currentPage
        }

        else if (currentPageInput.value > maxPage) {
            currentPageInput.value = maxPage
        }

        else if (currentPageInput.value < 1) {
            currentPageInput.value = 1
        }

        currentPage = currentPageInput.value

        let selectedPage = document.querySelector(`.page[data-page="${currentPage}"]`)

        scroller(selectedPage)

    }


}





// function addActiveClass(selectedPage) {

//     selectedPage.classList.add('activePage')

// }


function scroller(selectedPage) {        //For scroll and show page active

    content.scrollTop = selectedPage.offsetTop - 90

}







content.addEventListener('touchmove', scrollContent)
content.addEventListener('wheel', scrollContent)
// content.addEventListener('scroll', scrollContent)



nextBtn.addEventListener('click', nextPage)



prevBtn.addEventListener('click', prevPage)




addPage.addEventListener('click', nextPage)

minPage.addEventListener('click', prevPage)

currentPageInput.addEventListener('change', changeInput)



formInput.addEventListener('keydown', optionalPage)


// PAGINATION CONTENT //