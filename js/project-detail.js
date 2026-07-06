// 프로젝트별 기획의도 / 배운점 / 느낀점 데이터
const projectDetails = {
  adobe: {
    title: "Adobe(Redesign)",
    meta: "팀 프로젝트 · 2026 (1주) · HTML, CSS, JavaScript, AOS, Swiper.js",
    intent:
      "Adobe Creative Cloud 앱들의 정보 구조가 복잡하고 진입 장벽이 높다는 문제의식에서 출발함.\n사용자 흐름 중심의 직관적인 UI로 재설계하는 것을 목표로 진행함.",
    learned:
      "Photoshop·Illustrator·Premiere Pro의 실제 UI를 미니어처로 재현하며 앱별 인터랙션 패턴 차이를 분석함.\nBefore & After 드래그 슬라이더 구현 과정에서 마우스 이벤트 처리와 좌표 계산 로직을 직접 다루며 인터랙션 구현 감각을 익힘.",
    thoughts:
      "리디자인은 예쁘게 바꾸는 작업이 아니라 기존 사용자의 학습된 습관을 깨지 않으면서 개선하는 작업임을 체감함.\n이후 프로젝트에서 기존 UI 분석을 리디자인 전 필수 단계로 삼게 됨.",
  },
  fitmatch: {
    title: "fitmatch",
    meta: "개인 프로젝트 · 2026 (1주) · HTML, CSS, JavaScript, AOS, Swiper.js",
    intent:
      "원하는 운동 정보를 찾기 어려운 기존 구조의 문제를 해결하기 위해, 카테고리 기반 탐색 구조로 정보 접근 속도를 개선하는 것을 목표로 함.",
    learned:
      "정보 카테고리를 어떻게 분류해야 사용자가 가장 빠르게 원하는 항목에 도달하는지 여러 안을 비교하며 IA(정보 구조) 설계 감각을 익힘.",
    thoughts:
      "기능을 다 넣는 것보다 필요한 경로를 짧게 만드는 것이 UX에서 더 중요하다는 걸 느낌.",
  },
  shoplite: {
    title: "Shoplite",
    meta: "개인 프로젝트 · 2026.04 (1주) · HTML, CSS, JavaScript, AOS, Swiper.js",
    intent:
      "상품 탐색 과정에서 발생하는 피로도를 줄이기 위해, 간결한 레이아웃과 빠른 정보 전달 중심의 UX로 개선하는 것을 목표로 함.",
    learned:
      "상품 카드의 정보 우선순위(가격·이름·이미지 노출 순서)를 조정하며 시각적 위계가 구매 결정 속도에 미치는 영향을 실험함.",
    thoughts:
      "쇼핑몰 UI는 화려함보다 탐색 피로를 줄이는 절제가 전환율에 더 직결된다는 걸 깨달음.",
  },
  stx: {
    title: "STX 건설 (Clone-Coding)",
    meta: "클론코딩 · 2026.03 (1주) · HTML, CSS, JavaScript",
    intent:
      "단순 마크업 구현 연습을 넘어, 실제 사이트의 레이아웃 설계 의도와 인터랙션 구조를 분석하며 코딩 실력을 확장하는 것을 목표로 함.",
    learned:
      "기존 사이트 구조를 그대로 복제하지 않고 배치 의도를 역추적하며 HTML 시맨틱 구조와 CSS 레이아웃 설계 원리를 익힘.",
    thoughts:
      "클론코딩은 똑같이 만드는 연습이 아니라 타인의 설계 의도를 읽는 연습이라는 걸 느낌.",
  },
  dosirak: {
    title: "도시락통 (Clone-Coding)",
    meta: "클론코딩 · 2026.04 (1주) · HTML, CSS, JavaScript, AOS, Swiper.js",
    intent:
      "모바일 환경에서 반응형 대응이 미흡한 기존 사이트 구조를 분석해, 화면 크기별 레이아웃 전환과 사용성을 개선하는 연습을 목표로 함.",
    learned:
      "브레이크포인트 설정과 이미지 사이즈 최적화 과정에서 화면 비율별로 레이아웃이 깨지는 지점을 직접 찾아 수정하며 반응형 웹 구현 원리를 익힘.",
    thoughts:
      "반응형은 화면을 줄이는 작업이 아니라 화면마다 정보 우선순위를 다시 설계하는 작업임을 깨달음.",
  },
  airbnb: {
    title: "airbnb-clone (Clone-Coding)",
    meta: "클론코딩 · 2026 (1주) · HTML, CSS, JavaScript, AOS, Swiper.js",
    intent:
      "검색·필터·카드 리스트가 뒤섞인 기존 구조를 분석해, 영역별 역할을 분리한 레이아웃으로 재구성하는 것을 목표로 함.",
    learned:
      "카드 그리드의 반응형 컬럼 조정과 필터 바의 sticky 포지셔닝을 구현하며, 스크롤 중에도 핵심 탐색 요소를 유지하는 레이아웃 원리를 익힘.",
    thoughts:
      "정보량이 많은 화면일수록 무엇을 고정하고 무엇을 흘려보낼지 결정하는 것이 UI 설계의 핵심임을 느낌.",
  },
  google: {
    title: "google-clone (Clone-Coding)",
    meta: "클론코딩 · 2026 (1주) · HTML, CSS, JavaScript, AOS, Swiper.js",
    intent:
      "검색창 하나에 기능이 집중된 미니멀 구조를 분석해, 여백과 정렬만으로 신뢰감을 주는 레이아웃을 재현하는 것을 목표로 함.",
    learned:
      "요소를 더 넣지 않고도 정렬·여백·타이포그래피만으로 완성도를 높이는 미니멀 레이아웃 구현 방법을 익힘.",
    thoughts:
      "미니멀한 화면일수록 각 요소의 위치 하나하나가 명확한 이유를 가져야 한다는 것을 느낌.",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const pjModal = document.getElementById("pjModal");
  const pjTitle = document.getElementById("pjTitle");
  const pjMeta = document.getElementById("pjMeta");
  const pjIntent = document.getElementById("pjIntent");
  const pjLearned = document.getElementById("pjLearned");
  const pjThoughts = document.getElementById("pjThoughts");
  const pjClose = document.getElementById("pjClose");

  if (!pjModal) return;

  function openPjModal(key) {
    const data = projectDetails[key];
    if (!data) return;
    pjTitle.textContent = data.title;
    pjMeta.textContent = data.meta;
    pjIntent.textContent = data.intent;
    pjLearned.textContent = data.learned;
    pjThoughts.textContent = data.thoughts;
    pjModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closePjModal() {
    pjModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".detail-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openPjModal(btn.dataset.project);
    });
  });

  pjClose.addEventListener("click", closePjModal);

  pjModal.addEventListener("click", (e) => {
    if (e.target === pjModal) closePjModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePjModal();
  });
});
