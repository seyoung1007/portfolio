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
    intent:
      "제품 스펙을 단순 나열하기보다 구매 결정에 필요한 정보를 시각적 위계로 배치해, 스크롤만으로 구매 포인트가 전달되도록 기획함.",
    learned:
      "이미지와 텍스트의 비율, 여백을 반복 조정하며 상세페이지에서는 정보량보다 읽는 순서가 전환에 더 큰 영향을 준다는 것을 파악함.",
    thoughts:
      "디자인 툴 숙련도보다 카피와 이미지의 배치 순서를 설계하는 기획력이 상세페이지 완성도를 좌우한다는 걸 느낌.",
  },

  {
    title: "팝업디자인1",
    category: "카드뉴스",
    period: "2026.06",
    tools: "Illustrator · Photoshop",
    description: "SNS 업로드용 카드뉴스를 기획하고 디자인했습니다.",
    image: "assets/images/design/팝업디자인.PNG",
    detail: "assets/images/design/팝업디자인.PNG",
    intent:
      "SNS 피드에서 스크롤을 멈추게 할 임팩트 있는 첫 장과, 짧은 시간 안에 메시지가 읽히는 카드 구성을 목표로 기획함.",
    learned:
      "카드뉴스 특성상 텍스트 분량을 최소화하면서도 핵심 메시지를 전달하는 카피라이팅과 타이포그래피 강약 조절 방법을 익힘.",
    thoughts:
      "SNS 콘텐츠 디자인은 예쁨보다 1초 안에 읽히는가가 기준이 되어야 한다는 걸 깨달음.",
  },
  {
    title: "팝업디자인2",
    category: "카드뉴스",
    period: "2026.06",
    tools: "Illustrator · Photoshop",
    description: "SNS 업로드용 카드뉴스를 기획하고 디자인했습니다.",
    image: "assets/images/design/팝업디자인2.png",
    detail: "assets/images/design/팝업디자인2.png",
    intent:
      "팝업디자인1과 시리즈로 이어지는 카드뉴스로, 톤앤매너의 일관성을 유지하면서 다른 메시지를 전달하는 것을 목표로 함.",
    learned:
      "컬러 팔레트와 레이아웃 그리드를 고정해두고 콘텐츠만 교체하는 템플릿화 작업 방식을 익힘.",
    thoughts:
      "시리즈 콘텐츠는 매번 새로 디자인하기보다 일관된 시스템을 만들어두는 게 더 효율적이라는 걸 체감함.",
  },

  {
    title: "랜딩페이지",
    category: "랜딩페이지",
    period: "2026.06",
    tools: "Figma · Photoshop",
    description: "프로모션용 랜딩페이지 디자인입니다.",
    image: "assets/images/design/랜딩페이지 최종.png",
    detail: "assets/images/design/랜딩페이지 최종.png",
    intent:
      "프로모션 기간 내 전환을 유도하기 위해, 혜택 정보를 스크롤 흐름에 따라 단계적으로 노출하는 구조로 기획함.",
    learned:
      "CTA 버튼의 위치와 반복 노출 빈도가 전환 동선에 미치는 영향을 고려해 배치를 조정하는 방법을 익힘.",
    thoughts:
      "랜딩페이지는 정보 전달용 웹페이지가 아니라 행동을 유도하는 설계도라는 걸 느낌.",
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
    intent:
      "실제 운영 가능한 쇼핑몰을 목표로, 메인 페이지와 상품페이지의 구매 동선을 Cafe24 플랫폼 제약 안에서 설계함.",
    learned:
      "플랫폼 자체의 그리드·스킨 제약을 파악하고 그 안에서 디자인을 최적화하는 실무형 작업 방식을 익힘.",
    thoughts:
      "실제 서비스 플랫폼에서는 이상적인 디자인보다 제약 안에서의 최선을 찾는 능력이 중요하다는 걸 깨달음.",
  },

  {
    title: "웹·앱 디자인",
    category: "앱디자인",
    period: "2026.06",
    tools: "Figma",
    description:
      "다양한 화면 크기에 대응하는 컴포넌트 기반 커머스 앱 UI를 설계했습니다.",
    image: "assets/images/design/앱디자인.png",
    detail: "assets/images/design/앱디자인.png",
    url: "https://www.figma.com/design/yJ7x2fbi07PNHvussY9Jeo/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=0-1&p=f&t=z6zbbSCTXNWxgXLF-0",
    intent:
      "다양한 디바이스 화면에서 동일한 사용성을 제공하기 위해, 반응형 UI를 고려한 컴포넌트 기반 설계를 목표로 함.",
    learned:
      "Figma 오토레이아웃과 컴포넌트 variant를 활용해 화면 크기별 대응을 효율적으로 관리하는 방법을 익힘.",
    thoughts:
      "반응형 디자인은 화면마다 새로 그리는 게 아니라 하나의 시스템을 유연하게 만드는 것이라는 걸 느낌.",
  },
  {
    title: "웹·앱 디자인",
    category: "앱디자인",
    period: "2026.06",
    tools: "Figma",
    description: "User Flow를 먼저 설계한 뒤 화면을 구성한 앱 UI입니다.",
    image: "assets/images/design/앱디자인2.png",
    detail: "assets/images/design/앱디자인2.png",
    url: "https://www.figma.com/design/t7zxsROqRQXVH7zcvIGji0/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=1-15&t=ia5O14e2EGhOzPJn-0",
    intent:
      "앱 화면 간 이동 흐름을 명확히 전달하기 위해, User Flow를 먼저 설계한 뒤 화면을 디자인하는 순서로 진행함.",
    learned:
      "화면을 먼저 그리기보다 플로우를 먼저 정리하면 필요한 화면 수와 구조가 자연스럽게 줄어든다는 것을 경험함.",
    thoughts: "좋은 UI는 화면이 아니라 흐름에서 시작된다는 걸 체감함.",
  },
  {
    title: "웹·앱 디자인",
    category: "웹디자인",
    period: "2026.06",
    tools: "Figma",
    description: "넓은 화면의 정보 위계를 고려한 반응형 웹 UI입니다.",
    image: "assets/images/design/웹디자인.png",
    detail: "assets/images/design/웹디자인.png",
    url: "https://www.figma.com/design/TalJR4Oeqv7pU84PMFmn94/%EC%83%B5%EB%9D%BC%EC%9D%B4%ED%8A%B8?node-id=0-1&p=f&t=3vrzi5zOIBBtyxJ2-0",
    intent:
      "웹 환경의 넓은 화면을 활용해 정보 위계를 명확히 드러내는 레이아웃을 목표로 기획함.",
    learned:
      "그리드 시스템과 여백을 활용해 넓은 화면에서도 시선의 흐름이 흩어지지 않도록 배치하는 방법을 익힘.",
    thoughts:
      "화면이 넓을수록 오히려 무엇을 비울지 결정하는 것이 중요하다는 걸 깨달음.",
  },
  {
    title: "웹·앱 디자인",
    category: "앱디자인",
    period: "2026.06",
    tools: "Figma",
    description: "'혼밥' 상황에 맞춰 메뉴 선택을 단순화한 앱 UI입니다.",
    image: "assets/images/design/앱디자인3.png",
    detail: "assets/images/design/앱디자인3.png",
    url: "https://www.figma.com/design/TJeVxZGO89fXJdvGT8XBFb/honbab?node-id=0-1&t=f44DTUhWSlwmmHJ1-1ㅎ",
    intent:
      "'혼밥' 상황에 맞는 메뉴를 빠르게 선택할 수 있는 앱 컨셉으로, 상황 기반 UX를 목표로 기획함.",
    learned:
      "빠른 의사결정이 필요한 사용자 상황을 고려해 정보량을 줄이고 선택지를 단순화하는 설계 방식을 익힘.",
    thoughts:
      "사용자 상황(context)을 고려하지 않은 UI는 아무리 예뻐도 사용성이 떨어진다는 걸 느낌.",
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
const designIntent = document.getElementById("designIntent");
const designLearned = document.getElementById("designLearned");
const designThoughts = document.getElementById("designThoughts");
const detailImg = document.getElementById("detailImg");
const imageBox = document.getElementById("imageBox");
const moreBtn = document.getElementById("moreBtn");
const tabBtns = document.getElementById("tabBtns");

function switchTab(tabId) {
  tabBtns.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === tabId);
  });
}

tabBtns.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.onclick = () => switchTab(btn.dataset.tab);
});

document.querySelectorAll(".card").forEach((card, index) => {
  card.onclick = () => {
    const item = works[index];
    title.textContent = item.title;
    category.textContent = item.category;
    period.textContent = item.period;
    tools.textContent = item.tools;
    desc.textContent = item.description;
    designIntent.textContent = item.intent || "";
    designLearned.textContent = item.learned || "";
    designThoughts.textContent = item.thoughts || "";
    detailImg.src = item.detail;
    projectLink.href = item.url;
    switchTab("desc");
    imageBox.scrollTop = 0;
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
