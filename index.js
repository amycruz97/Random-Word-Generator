const url = 'https://random-word-api.herokuapp.com/word?number=10';
const word = document.querySelector('.word');
const btn = document.querySelector('.btn')



// console.log(btn)

btn.addEventListener('click', function() {

    fetch(url)
        .then(function(res) {
            if (res.status != 200) {
                console.log('There is a problem here')
                return;
            }
            res.json()
                .then(function(words) {



                    words.forEach((data) => {


                        word.innerHTML = data

                    })


                })
        })

    .catch(function(error) {
        console.log('There is an error', error)
    })

})