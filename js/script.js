document.addEventListener('DOMContentLoaded', function () {
    
    const imageData = [
        {
            id: 1,
            title: "ئاهەنگی گواستنەوە",
            description: "لە ئاهەنگی گواستنەوەکانتانا ئامەدەدەبین بۆ ئەوەی بە جوانترین شێوە ئەم ڕۆژەتان بۆ جوانتر بکەین،لەهەر کات و لە هەر جێگەیەک بێت،،بۆ بینی زیاتری وێنەکانمان لەم ڕۆژەدا گرتە لەسەر دوگمەی وێنەی زیاتر بکە",
            imageUrl: "111.jpg",
            tags: ["وێنەی زیاتری گواستنەوە"]
        },
        {
            id: 2,
            title: " شەکراو خواردنەوە",
            description: "تاقمی کەوانتەری ناوازە،بە هەموو قەبارەو بە هەموو ڕەنگێک،لەگەڵ دیزاینی کەل و پەلەکنتان دەیگونجێنین",
            imageUrl: "112.jpg",
            tags: ["وێنەی زیاتری شەکراوخواردنەوە"]
        },
        {
            id: 3,
            title: " ئاهەنگی دەرچوون",
            description: "جوانترین و ناوازەترین شوێن تەلەڤزوێن،دیمەنەکان جوانترن دەبن لەگەڵ ئێمە",
            imageUrl: "113.jpg",
            tags: [ "وێنەی زیاتری ئاهەنگی دەرچوون"]
        },
        {
            id: 4,
            title: "وێنەی تایبەت",
            description: "",
            imageUrl: "117.jpg",
            tags: ["وێنەی زیاتری تایبەت"]
        },
        {
            id: 5,
            title: "ڕۆژی لە دایک بوون",
            description: "",
            imageUrl: "115.jpg",
            tags: [ "وێنەی زیاتری ڕۆژی لە دایکبوون"]
        },
        {
            id: 6,
            title: "ڕۆژی بۆنەکان",
            description: "",
            imageUrl: "116.jpg",
            tags: ["وێنەی زیاتری ڕۆژی بۆنەکان"]
        },
        {
            id: 7,
            title: "هەمەڕەنگ",
            description: "",
            imageUrl: "114.jpg",
            tags: ["وێنەی زیاتری هەمەڕەنگ"]
        },
        
    ];

    // Render images
    function renderImages() {
        const container = document.getElementById('imageContainer');

        imageData.forEach(item => {
            const panel = document.createElement('div');
            panel.className = 'panel';
            panel.dataset.id = item.id;

            panel.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}">
                <div class="content">
                    <h3>${item.title}</h3>
                    <p class="description">${item.description}</p>
                    <div class="tags">
                        ${item.tags.map(tag => `<a href="#" class="tag" data-tag="${tag}">${tag}</a>`).join('')}
                    </div>
                </div>
            `;

            panel.addEventListener('click', function () {
                // If this panel is already active, collapse it
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                } else {
                    // Collapse all panels
                    document.querySelectorAll('.panel').forEach(p => {
                        p.classList.remove('active');
                    });
                    // Expand this panel
                    this.classList.add('active');
                }
            });

            container.appendChild(panel);
        });
    }

    // Redirect on tag click
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('tag')) {
            e.preventDefault();
            const tagName = e.target.dataset.tag;

            // Example redirects — change the URLs to match your site's structure
            if (tagName === "وێنەی زیاتری گواستنەوە") {
                window.location.href = "photo.html";
            } else if (tagName === "وێنەی زیاتری شەکراوخواردنەوە") {
                window.location.href = "./photo1.html";
            }
            else if (tagName === "وێنەی زیاتری ئاهەنگی دەرچوون") {
                window.location.href = "./photo2.html";
            }
            else if (tagName === "وێنەی زیاتری تایبەت") {
                window.location.href = "./photo3.html";
            } 
             else if (tagName === "وێنەی زیاتری ڕۆژی لە دایکبوون") {
                window.location.href = "./photo4.html";
            } 
              else if (tagName === "وێنەی زیاتری ڕۆژی بۆنەکان") {
                window.location.href = "./photo5.html";
            } 
              else if (tagName === "وێنەی زیاتری هەمەڕەنگ") {
                window.location.href = "./photo6.html";
            }  else {
                // For unknown tags, redirect to a general page
                window.location.href = `/tags/${encodeURIComponent(tagName)}.html`;
            }
        }
    });

    // Initialize the app
    renderImages();
});
