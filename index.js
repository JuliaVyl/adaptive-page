const cards = document.getElementsByClassName('swiper-wrapper')[0];

const feedbackUrl = 'https://frozen-peak-26028.herokuapp.com/api/feedback';
const blogUrl = 'https://frozen-peak-26028.herokuapp.com/api/blog/';

const getJson = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (e) {
    console.log(e);
    return e;
  }
};
async function getReviews() {
  const feedback = await getJson(feedbackUrl);
  for (let item of feedback) {
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

(async () => {
  cards.innerHTML = '';
  await getReviews();
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
})();

function showPosts() {
  let btn = document.getElementById('btn-more');
  btn.onclick = createPosts;
}

async function createPosts() {
  const news = document.getElementsByClassName('news__cards')[0];
  const posts = await getJson(blogUrl);
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
