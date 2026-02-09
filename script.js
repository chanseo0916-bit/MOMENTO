// Initialize AOS Animation Library
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
});

// Loader


// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('active');

        // Toggle Icon
        const icon = navToggle.querySelector('i');
        if (icon) {
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Close mobile menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* Reviews Generation Logic */
const reviewData = [
    {
        name: "김*희",
        date: "2024.02.08",
        content: "종로3가 첫방문에 친절하고 퀄리티 좋은 반지를 찾게되어 바로 결제하게되었어요🔥🔥 식은 내년 4월이지만 합리적인 가격에 좋은 품질의 반지를 놓칠 수없었어용! 김민희 실장님과 다른 직원분들이 워크인으로 예약없이 왔지만 잘 대응해주셔서 구매까지 이루어졌네용☺️ 감사합니다~~!!",
        stars: 5,
        tags: ["상품이 다양해요", "트렌디해요", "친절해요", "분위기가 편안해요", "추천을 잘해줘요"]
    },
    {
        name: "이*민",
        date: "2024.02.07",
        content: "독특한 디자인이 많아서 여기로 결정했어요!! 상담해주시는 분도 너무 친절하셔서 마음에 드는 좋은 디자인 찾을 수 있었습니다☺️ 결혼 예정이신 분들이 오시기에 좋은것 같아용👍",
        stars: 5,
        tags: ["디자인이 예뻐요", "상담 잘해줘요", "친절해요", "최고에요"]
    },
    {
        name: "박*준",
        date: "2024.02.06",
        content: "결혼 준비하면서 가장 고민했던게 웨딩반지 였는데, 모멘토 반지는 딱 보자마자 고급스럽고 디자인이 맘에 들었어요! 상담도 취향에 맞게 너무 친절하게 해주시고 가격도 잘 맞춰주셔서 최종 결정했습니다 ✨✨ 추천드려요~!!",
        stars: 5,
        tags: ["고급스러워요", "가격이 합리적이에요", "친절해요", "추천해요"]
    }
];

// Helper to generate more reviews
function generateMoreReviews(count) {
    const names = ["김*서", "이*우", "박*현", "최*지", "정*호", "강*민", "조*진", "윤*영", "장*혁", "임*수", "한*라", "오*성", "서*아", "신*비", "권*찬", "황*주", "안*빈", "송*재", "전*율", "홍*경"];
    const contents = [
        "종로 예물샵 투어 중 가장 마음에 들었어요. 디자인이 정말 다양하고 고급스러워요.",
        "가격 정찰제라 믿을 수 있었고 합리적이었어요. 상담해주시는 실장님이 너무 친절하셨어요.",
        "반지 퀄리티가 남다릅니다. 지인 추천으로 왔는데 정말 만족합니다.",
        "웨딩밴드 맛집 인정합니다! 다른 곳보다 다이아몬드가 더 반짝이는 것 같아요.",
        "까다로운 예비신랑도 만족해서 다행이에요. 디자인 예뻐요.",
        "상담 꼼꼼하게 해주셔서 감사해요. 덕분에 예쁜 반지 잘 맞췄습니다.",
        "인스타보고 찾아갔는데 사진보다 실물이 훨씬 예쁘네요! 강추합니다.",
        "주차도 편하고 매장 분위기도 너무 좋아요. 프라이빗하게 상담받을 수 있어서 좋았습니다.",
        "여러 군데 다녀봤지만 여기가 제일 마음에 들었어요. 계약하고 갑니다~",
        "친구 소개로 왔는데 역시 소문대로네요. 친절하시고 가격도 좋아요."
    ];
    const tagsPool = ["친절해요", "가성비 좋아요", "디자인 예뻐요", "고급스러워요", "상담 꼼꼼해요", "추천해요", "재방문 의사 있어요", "매장이 깔끔해요", "주차가 편해요"];

    const moreReviews = [];
    for (let i = 0; i < count; i++) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomContent = contents[Math.floor(Math.random() * contents.length)];
        const randomDate = `2024.01.${Math.floor(Math.random() * 30) + 1}`;
        const randomStars = Math.random() > 0.1 ? 5 : 4; // Mostly 5 stars

        // Random tags (2-3 tags)
        const randomTags = [];
        const tagCount = Math.floor(Math.random() * 2) + 2;
        for (let j = 0; j < tagCount; j++) {
            const tag = tagsPool[Math.floor(Math.random() * tagsPool.length)];
            if (!randomTags.includes(tag)) randomTags.push(tag);
        }

        moreReviews.push({
            name: randomName,
            date: randomDate,
            content: randomContent,
            stars: randomStars,
            tags: randomTags
        });
    }
    return moreReviews;
}

// Combine initial + generated
const allReviews = [...reviewData, ...generateMoreReviews(47)];

// Render Reviews
const reviewsContainer = document.getElementById('reviews-container');
const loadMoreBtn = document.getElementById('load-more-btn');
let visibleReviews = 6; // Initially show 6

function renderReviews() {
    if (!reviewsContainer) return;

    reviewsContainer.innerHTML = '';

    allReviews.forEach((review, index) => {
        const reviewEl = document.createElement('div');
        reviewEl.className = 'review-card';
        if (index >= visibleReviews) {
            reviewEl.classList.add('hidden-review');
        }

        // Generate stars
        let starsHtml = '';
        for (let i = 0; i < review.stars; i++) {
            starsHtml += '<i class="fas fa-star"></i>';
        }

        // Generate tags
        let tagsHtml = '';
        review.tags.forEach(tag => {
            tagsHtml += `<span class="review-tag">#${tag}</span>`;
        });

        reviewEl.innerHTML = `
            <div class="review-header">
                <div class="review-stars">${starsHtml}</div>
                <div class="review-date">${review.date}</div>
            </div>
            <p>"${review.content}"</p>
            <div class="review-footer">
                <span class="review-author">${review.name}님</span>
                <div class="review-tags">${tagsHtml}</div>
            </div>
        `;

        // Add minimal animation delay for visible ones
        if (index < visibleReviews) {
            reviewEl.setAttribute('data-aos', 'fade-up');
            reviewEl.setAttribute('data-aos-delay', (index % 3) * 100);
        }

        reviewsContainer.appendChild(reviewEl);
    });

    // Update button state
    if (loadMoreBtn) {
        if (visibleReviews >= allReviews.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
            loadMoreBtn.textContent = `후기 더보기 (${visibleReviews}/${allReviews.length})`;
        }
    }
}

// Load More Functionality
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        visibleReviews += 9; // Show 9 more on click
        renderReviews();
    });
}

// Initial Render
if (reviewsContainer) {
    renderReviews();
}

// ==========================================
// Google Form Submission Logic
// ==========================================
const reservationForm = document.getElementById('reservation-form');
const reservationModal = document.getElementById('reservation-modal');

// Close modal when clicking outside
if (reservationModal) {
    reservationModal.addEventListener('click', (e) => {
        if (e.target === reservationModal) {
            reservationModal.classList.remove('active');
        }
    });
}

function showModal() {
    if (reservationModal) {
        reservationModal.classList.add('active');
        setTimeout(() => {
            reservationModal.querySelector('.modal-content').style.opacity = '1';
        }, 10);
    } else {
        alert('예약이 완료되었습니다.');
    }
}

if (reservationForm) {
    reservationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = reservationForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = '접수 중...';
        submitBtn.disabled = true;

        // Collect form data using standard FormData
        const formData = new FormData(reservationForm);

        // Convert to URLSearchParams for x-www-form-urlencoded
        // This ensures GAS e.parameter works perfectly
        const params = new URLSearchParams();
        for (const pair of formData.entries()) {
            params.append(pair[0], pair[1]);
        }

        // Google Apps Script Web App URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycbykV2lDmo8XfLlT9oN1UClxi2TX9dMmT0Sa9O9ZVbIYH2nvI4FyY5r2-ga_d65ANl5Vsw/exec';

        // Send data
        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString()
        })
            .then(() => {
                // Success (Opaque response)
                showModal();
                reservationForm.reset();
            })
            .catch(error => {
                console.error('Error!', error);
                // Even on error, sometimes it's just a CORS false alarm if using no-cors, 
                // but real network errors trigger this.
                alert('인터넷 연결을 확인해주세요. 예약 접수에 실패했습니다.');
            })
            .finally(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
    });
}
