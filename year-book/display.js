document.querySelector('title').focus();

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();


    const title = document.querySelector('#title').value;
    const date = document.querySelector('#date').value;
    const img = document.querySelector('#img').value;
    const discription = document.querySelector('#discription').value;
    
    let moments = JSON.parse(localStorage.getItem('moments'));
    moments.push({title:title, date:date, img:img, discription:discription});
    localStorage.setItem('moments', JSON.stringify(moments));
    console.log("cattttt");

})

