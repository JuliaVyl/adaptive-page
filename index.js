let data = [
  {
    name: 'Rusty',
    instagram_username: 'pet.of.art',
    text:
      'I have never come across an Instagram growth application like Combin. It has everything I need: PC-friendly, targeted hashtag search and many other handy features. Combin has worked wonders for my account @pet.of.art with getting new followers!',
  },
  {
    name: 'Brittney Jae',
    instagram_username: 'brittney_jae_',
    text:
      "A friend of mine introduced me to Combin a few weeks ago and it's made my work life so much easier. As a brand ambassador, it's my duty to interact with as many of our supporters as possible. Combin allows me to search for specific hashtags associated with the topics of the event and comment on or like them. It also allows me to pinpoint specific locations that we want to target. I recommend Combin and will definitely continue using it myself.",
  },
  {
    name: 'Calvin Uy',
    instagram_username: 'calvinathor',
    text:
      "I really love the user interface. It is very user friendly. I love how the filter works. It is very useful. I am so happy I saw Combin, I am planning to be using this in the long run in supplement to other Instagram tools out there. It's a clean, and to the point experience in managing an Instagram account.",
  },
  {
    name: 'Brandon Hunt',
    instagram_username: 'elizabethanddnicole',
    text:
      "I help build brands online primarily through social media. Combin helps make my work nearly effortless. I just set up the tasks I need it to do and it works all day while I can focus my efforts elsewhere. There's no other option to Combin!",
  },
  {
    name: 'leaders_in_luxury',
    instagram_username: 'leaders_in_luxury',
    text:
      "I started using Combin when I had roughly 200 followers — now it’s over 4000! It’s a revolutionary application in today’s social media marketing. Combin doesn't just blindly follow, like and comment on everything that vaguely seems fit, but provides convenient tools for searching, analyzing and engaging target audience en masse. Whether you’re a blogger or a well established company, this app can help you realize your true potential.",
  },
  {
    name: 'Pedro Vieira',
    instagram_username: 'highflownvisuals',
    text:
      'Combin allows me to save countless hours in regards to engagement on Instagram. Instead of having to spend 3-4 hours a day engaging, I can simply use the app, put in a hashtag and engage automatically with people without having to lift a single finger. It really is an easy to use app and an easy on the eye interface. Results have been almost immediate with people responding back and following. Highly suggest this app to any user.',
  },
  {
    name: 'Dimitrios Karagiannis',
    instagram_username: 'mboroshirt',
    text:
      "Combin stands out of all the other social media products out there. I like the architecture, it’s easy to understand based on existing mental models how things work and very usable, good work! The design is minimalistic, so you can focus on your tasks. I prefer it to other services packed full of features and analytics that 'normal' people don't understand as they face so many other issues to get their business run. I want it clean, easy learning, usable and effective, like Combin.",
  },
  {
    name: 'Marta Bucholc',
    instagram_username: 'we_wander_everywhere',
    text:
      'Combin is exactly the tool I was looking for. Unlike many other applications, it gives you a real control over the automated actions — it’s you who chooses who to follow and what to like. There are many target audience search settings that help finding and reaching real, potentially interested accounts. You save time and limited Instagram actions while getting more genuine engagement with your content. Overall, Combin is more affordable and effective than other tools I’ve tried.',
  },
];
let posts = [
  {
    title: 'Instagram Reveals Explore Tab AI',
    url: 'https://blog.combin.com/instagram-explore-ai-5c947d990dde',
    date: '2019-11-29',
  },
  {
    title: 'Instagram Supports Stories GIF Stickers, WhatsApp Integration',
    url:
      'https://blog.combin.com/important-instagram-updates-of-january-every-marketer-should-know-fe13bc5166d7',
    date: '2018-11-01',
  },
  {
    title: 'Instagram Reaches 500M Daily Active Users',
    url:
      'https://blog.combin.com/instagram-reaches-500-million-user-on-a-daily-basis-44a462c6bf29',
    date: '2017-09-26',
  },
  {
    title: '13 Instagram Algorithm Facts Revealed For the First Time',
    url:
      'https://blog.combin.com/13-instagram-algorithm-facts-revealed-for-the-first-time-8bc00c0964aa',
    date: '2018-06-03',
  },
  {
    title: 'Combin Growth, Combin Scheduler, and More — Meet Our Updates',
    url:
      'https://blog.combin.com/combin-growth-combin-scheduler-and-more-meet-our-updates-6d29ca1c669a',
    date: '2019-09-20',
  },
  {
    title: 'Combin Scheduler 1.1: What’s New?',
    url: 'https://blog.combin.com/combin-scheduler-f4a3e5df71b0',
    date: '2019-12-10',
  },
];

const cards = document.getElementsByClassName('swiper-wrapper')[0];

function getReviews() {
  for (let item of data) {
    let slide = document.createElement('div');
    slide.className = 'swiper-slide';
    let circle = document.createElement('div');
    circle.className = 'swiper-slide__circle';
    let reviewWrapper = document.createElement('div');
    reviewWrapper.className = 'swiper-slide__review-wrapper';
    let review = document.createElement('div');
    review.className = 'swiper-slide__review';
    let text = document.createElement('p');
    text.className = 'swiper-slide__text';
    text.textContent = '"' + item.text + '"';
    let author = document.createElement('div');
    author.className = 'swiper-slider__author';
    let name = document.createElement('p');
    name.className = 'author__name';
    name.textContent = item.name + ',';
    let instUsername = document.createElement('p');
    instUsername.className = 'author__inst-username';
    instUsername.textContent = item.instagram_username;
    author.append(name);
    author.append(instUsername);
    review.append(text);
    review.append(author);
    reviewWrapper.append(review);
    slide.append(circle);
    slide.append(reviewWrapper);
    cards.append(slide);
  }
}
// Fetching data imitation
setTimeout(() => {
  cards.innerHTML = '';
  getReviews();
  let prev = document.querySelector('.swiper-button-prev');
  prev.style.display = 'block';
  let next = document.querySelector('.swiper-button-next');
  next.style.display = 'block';
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}, 1500);

function showPosts() {
  let btn = document.getElementById('btn-more');
  // NOTE: showAlert(); или showAlert(param); так НЕ сработает.
  // Нужно использовать ссылку на функцию, но не вызов функции.
  btn.onclick = createPosts;
}

function createPosts() {
  const news = document.getElementsByClassName('news__cards')[0];
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  for (let post of posts) {
    let card = document.createElement('a');
    card.className = 'news__card';
    card.setAttribute('href', post.url);
    card.setAttribute('target', '_blank');
    let imageDiv = document.createElement('div');
    imageDiv.className = 'card__image';
    let img = document.createElement('img');
    img.className = 'image-img';
    img.setAttribute('alt', post.title);
    img.setAttribute('src', './static/image/desktop/img1@2x.png');
    imageDiv.append(img);
    let title = document.createElement('p');
    title.className = 'card__link';
    title.textContent = post.title;
    card.append(imageDiv);
    card.append(title);
    news.append(card);
  }

  const btn = document.getElementById('news__more');
  btn.innerHTML = '';
}
