const works = [
  {
    title: "상세페이지 디자인",
    category: "상세페이지",
    period: "2026.06",
    tools: "Photoshop · Illustrator · Figma",
    description:
      "제품의 특징과 구매 포인트를 강조하는 상세페이지를 제작했습니다.",
    image: "assets/images/design/상세페이지 리디자인.jpg",
    detail: "assets/images/design/상세페이지 리디자인.jpg",
  },

  {
    title: "팝업디자인1",
    category: "카드뉴스",
    period: "2026.06",
    tools: "Illustrator · Photoshop",
    description: "SNS 업로드용 카드뉴스를 기획하고 디자인했습니다.",
    image: "assets/images/design/팝업디자인.PNG",
    detail: "assets/images/design/팝업디자인.PNG",
  },
  {
    title: "팝업디자인2",
    category: "카드뉴스",
    period: "2026.06",
    tools: "Illustrator · Photoshop",
    description: "SNS 업로드용 카드뉴스를 기획하고 디자인했습니다.",
    image: "assets/images/design/팝업디자인2.png",
    detail: "assets/images/design/팝업디자인2.png",
  },

  {
    title: "랜딩페이지",
    category: "랜딩페이지",
    period: "2026.06",
    tools: "Figma · Photoshop",
    description: "프로모션용 랜딩페이지 디자인입니다.",
    image: "assets/images/design/랜딩페이지 최종.png",
    detail: "assets/images/design/랜딩페이지 최종.png",
  },

  {
    title: "Cafe24 쇼핑몰",
    category: "Cafe24",
    period: "2026.06",
    tools: "Cafe24 · Photoshop",
    description: "쇼핑몰 메인과 상품페이지를 디자인했습니다.",
    image: "assets/images/design/cafe24.png",
    detail: "assets/images/design/cafe24.png",
    url: "https://tpdud3226.cafe24.com/skin-skin2",
  },

  {
    title: "웹·앱 디자인",
    category: "앱디자인",
    period: "2026.06",
    tools: "Figma",
    description: "반응형 UI를 고려하여 제작했습니다.",
    image: "assets/images/design/앱디자인.png",
    detail: "assets/images/design/앱디자인.png",
    url: "https://www.figma.com/design/yJ7x2fbi07PNHvussY9Jeo/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=0-1&p=f&t=z6zbbSCTXNWxgXLF-0",
  },
  {
    title: "웹·앱 디자인",
    category: "앱디자인",
    period: "2026.06",
    tools: "Figma",
    description: "반응형 UI를 고려하여 제작했습니다.",
    image: "assets/images/design/앱디자인2.png",
    detail: "assets/images/design/앱디자인2.png",
    url: "https://www.figma.com/design/t7zxsROqRQXVH7zcvIGji0/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=1-15&t=ia5O14e2EGhOzPJn-0",
  },
  {
    title: "웹·앱 디자인",
    category: "웹디자인",
    period: "2026.06",
    tools: "Figma",
    description: "반응형 UI를 고려하여 제작했습니다.",
    image: "assets/images/design/웹디자인.png",
    detail: "assets/images/design/웹디자인.png",
    url: "https://www.figma.com/design/TalJR4Oeqv7pU84PMFmn94/%EC%83%B5%EB%9D%BC%EC%9D%B4%ED%8A%B8?node-id=0-1&p=f&t=3vrzi5zOIBBtyxJ2-0",
  },
];

const cards = document.getElementById("cards");
const projectLink = document.getElementById("projectLink");
works.forEach((item) => {
  cards.innerHTML += `

<div class="card">

<img src="${item.image}">

<div class="info">

<div class="category">${item.category}</div>

<div class="title">${item.title}</div>

<div class="view">View Project →</div>

</div>

</div>

`;
});

const modal = document.getElementById("modal");

const title = document.getElementById("title");
const category = document.getElementById("category");
const period = document.getElementById("period");
const tools = document.getElementById("tools");
const desc = document.getElementById("desc");
const detailImg = document.getElementById("detailImg");
const imageBox = document.getElementById("imageBox");
const moreBtn = document.getElementById("moreBtn");

document.querySelectorAll(".card").forEach((card, index) => {
  card.onclick = () => {
    const item = works[index];
    title.textContent = item.title;
    category.textContent = item.category;
    period.textContent = item.period;
    tools.textContent = item.tools;
    desc.textContent = item.description;
    detailImg.src = item.detail;
    projectLink.href = item.url;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    if (item.url) {
      projectLink.href = item.url;
      projectLink.style.display = "inline-block";
    } else {
      projectLink.style.display = "none";
    }
  };
});

document.querySelector(".close").onclick = () => {
  modal.classList.remove("active");
  document.body.style.overflow = "";
};

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});
