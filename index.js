// let inputBox = document.getElementById('namefilde')

// let ul = document.getElementById('namelist')

// inputBox.addEventListener('keypress', function(event){

//     if(event.keyCode == 13){

//        let name = event.target.value
//      createLi(ul, name)
//       event.target.value = ''
//     }

// })


// function createLi(ul, name){

//     let li = document.createElement('li')
//     li.className = 'list-group-item my-2 d-flex'
//     li.innerHTML = name

//     let span = document.createElement('span')
//     span.innerHTML = 'x'
//     li.appendChild(span)
//     span.className='ml-auto'
//     span.style.color='red'
//     span.style.cursor= 'pointer'


//     span.addEventListener('click', function(){

//       ul.removeChild(li)

//     })
 
//     ul.appendChild(li)
// }


let inputFile = document.getElementById('namefilde')
let ul = document.getElementById('namelist')



inputFile.addEventListener('keypress', function(event){


  
    if(event.keyCode == 13){

        let name = event.target.value
        let li = document.createElement('li')
        li.className = 'list-group-item d-flex my-3'
        ul.appendChild(li)
        li.append(event.target.value)
        event.target.value = ''


        let span = document.createElement('span')
        span.innerHTML = 'x'
        span.className = 'ml-auto'
        span.style.color= 'red'
        span.style.cursor = 'pointer'
        li.appendChild(span)


        span.addEventListener('click', function(){

           ul.removeChild(li)
        })


        
    }
})