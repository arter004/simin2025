// 轮播功能实现
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// 自动播放
setInterval(nextImage, 3000);

// 添加事件监听
carousel.querySelector('.prev').addEventListener('click', prevImage);
carousel.querySelector('.next').addEventListener('click', nextImage);

// 初始化显示第一张图片
showImage(0);