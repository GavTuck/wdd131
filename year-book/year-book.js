const moment1 = {
    title: "I love my profesor",
    date: "July 11th, 2023",
    img: "profesor.jpg",
    discription: "My profesor Brother Thayne has been helping me with my project this week. His teaching style is pretty remarcable"
}
const moment2 = {
    title: "Gym grind",
    date: "May 14th, 2023",
    img: "gym.jpg",
    discription: "I was really enjoying the gym. I had a great workout. I also saw Connor while I was working out"
}
const moment3 = {
    title: "Temple Trip",
    date: "July 17th, 2024",
    img: "temple.jpg",
    discription: "I went to the Helena Temple this weekend. What a wonderful place that is found there. I felt such a unique spirit there and inspired me. I had the impresion that what we need to do in life is not procrastinate our day of repentence. I also know that God has a plan for all of us if we stay within our covenants."
}
const moment4 = {
    title: "First Game of the Season",
    date: "September 28th,2023",
    img: "intro1.jpg",
    discription: "Today we had the rich opportunity to beat our rivals ISU and win. It was enrgizing to see our star player Gavin Tucker get the wining touchdown and hit the gritty"
}

let moments = [moment1 , moment2, moment3, moment4];
if (!localStorage.getItem('moments')) {
    localStorage.setItem('moments', JSON.stringify(moments));
}
else{
    moments = JSON.parse(localStorage.getItem('moments'));
}
moments.forEach((moment) => {
    
    const article = document.createElement('article');
    article.classList.add('yearbookmoment');

    const title = document.createElement('h2');
    title.textContent = moment.title;

    const date = document.createElement('h3');
    date.textContent = moment.date;

    const img = document.createElement('img');
    img.src = moment.img;

    const discription = document.createElement('p');
    discription.textContent = moment.discription;   

    article.append(title, date, img, discription);
    document.querySelector('section').append(article);
});

