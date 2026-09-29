document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const domain = urlParams.get('domain') || 'kpop';       
    
    // Explicitly check for control parameter so it never misfires
    const conditionParam = urlParams.get('condition');
    const condition = (conditionParam === 'control') ? 'control' : 'treatment';

    const bodyTheme = document.getElementById('body-theme');
    const screenTheme = document.getElementById('phone-screen-theme');
    const headerTheme = document.getElementById('header-theme');
    const logo = document.getElementById('store-logo');
    const banner = document.getElementById('framing-banner');
    const progressFill = document.getElementById('progress-fill-bar');
    const artwork = document.getElementById('product-artwork');
    const title = document.getElementById('prod-title');
    const subtitle = document.getElementById('prod-subtitle');
    const price = document.getElementById('prod-price');
    const selectorContainer = document.getElementById('selector-container');
    const addBtn = document.getElementById('add-to-cart-btn');
    const toast = document.getElementById('cart-toast');
    const footer = document.getElementById('footer-text');
    const cartCount = document.getElementById('cart-count');
    const cartTrigger = document.getElementById('cart-trigger');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeModal = document.getElementById('close-modal');
    const finalizeOrder = document.getElementById('finalize-order');
    const checkoutSummaryText = document.getElementById('checkout-summary-text');
    const accordionToggle = document.getElementById('accordion-toggle');
    const accordionContent = document.getElementById('accordion-content');
    const detailsText = document.getElementById('details-text');

    const zoomTrigger = document.getElementById('zoom-trigger');
    const zoomModal = document.getElementById('zoom-modal');
    const zoomedImg = document.getElementById('zoomed-img');
    const closeZoom = document.getElementById('close-zoom');

    let cartItems = 0;

    zoomTrigger.addEventListener('click', () => {
        zoomedImg.src = artwork.src;
        zoomModal.style.display = 'flex';
    });
    closeZoom.addEventListener('click', () => {
        zoomModal.style.display = 'none';
    });
    zoomModal.addEventListener('click', (e) => {
        if(e.target === zoomModal) zoomModal.style.display = 'none';
    });

    accordionToggle.addEventListener('click', function() {
        if (accordionContent.style.display === "none") {
            accordionContent.style.display = "block";
            accordionToggle.innerText = "▲ Hide Product Details & Info";
        } else {
            accordionContent.style.display = "none";
            accordionToggle.innerText = "▼ View Product Details & Info";
        }
    });

    cartTrigger.addEventListener('click', () => {
        checkoutSummaryText.innerText = `You have ${cartItems} item(s) secured in your order. Review before finalizing.`;
        checkoutModal.style.display = 'flex';
    });
    closeModal.addEventListener('click', () => {
        checkoutModal.style.display = 'none';
    });
    finalizeOrder.addEventListener('click', () => {
        alert("Order simulated successfully! Recorded for study data.");
        checkoutModal.style.display = 'none';
    });

    if (domain === 'skincare') {
        bodyTheme.className = "theme-skincare";
        screenTheme.style.background = "#fffbf7"; 
        headerTheme.style.background = "#f7f2ec";

        logo.innerText = "APHRODITE GLOW";
        artwork.src = "https://univemanagement.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_yWZy4n4v6gkVSHX"; 
        title.innerText = "Vitamin C Serum";
        subtitle.innerHTML = "Brightening facial serum | 30 ml<br><span class='product-rating'>★★★★☆ 4.2 (248 reviews)</span>";
        price.innerText = "€10.90";
        footer.innerText = "Dermatologist tested. Suitable for everyday skincare routine.";
        detailsText.innerHTML = "<strong>Ingredients:</strong> L-ascorbic acid, Hyaluronic acid, Botanical extracts.<br><strong>Directions:</strong> Apply 3-4 drops daily to clean skin before moisturizing.";

        if (condition === 'control') {
            cartItems = 0;
            banner.style.display = 'none';
            addBtn.style.background = "#111111";
            addBtn.innerText = "ADD TO CART";
            selectorContainer.innerHTML = `<label>PRODUCT FORMAT:</label><p style="font-size:10px; color:#555;">Standard 30ml dropper bottle.</p>`;
        } else {
            cartItems = 4; 
            banner.style.display = 'block';
            banner.innerHTML = "You're almost there. 4 of 5 products in your skincare ritual are already selected. Add this serum to complete your ritual.";
            progressFill.style.width = "80%"; 
            addBtn.style.background = "#5c4033"; 
            addBtn.innerText = "COMPLETE MY RITUAL";
            selectorContainer.innerHTML = `<label>ROUTINE STATUS:</label><p class="status-highlight">Step 5 of 5 (1 product remaining)</p>`;
        }
    } else {
        // K-Pop Domain
        bodyTheme.className = "theme-kpop";
        screenTheme.style.background = "#faf9fc"; 
        headerTheme.style.background = "#f3eff8";

        logo.innerText = "K-RECORDS";
        artwork.src = "https://univemanagement.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_4xBCFwpuRUQAzf4"; 
        title.innerText = "DNE - 1st Mini Album";
        subtitle.innerHTML = "Official Member Version | CD, Photobook, Photocards<br><span class='trending-tag'>🔥 Trending Item</span>";
        price.innerText = "€25.99";
        footer.innerText = "All sales count towards Hanteo and Circle charts.";
        detailsText.innerHTML = "<strong>Album Tracklist:</strong><br>01. Somebody New<br>02. One More Chance<br>03. Lost Dream<br>04. Island<br><br><strong>Inclusions:</strong> CD, Photobook (80p), Lyric Booklet, 1 Random Photocard.";

        if (condition === 'control') {
            cartItems = 0;
            banner.style.display = 'none';
            addBtn.style.background = "#111111";
            addBtn.innerText = "ADD TO CART";
            selectorContainer.innerHTML = `
                <label>SELECT MEMBER VERSION:</label>
                <div class="version-grid" id="kpop-versions">
                    <button class="ver-btn" data-v="A">Version A</button>
                    <button class="ver-btn" data-v="B">Version B</button>
                    <button class="ver-btn" data-v="C">Version C</button>
                    <button class="ver-btn" data-v="D">Version D</button>
                    <button class="ver-btn" data-v="E">Version E</button>
                    <button class="ver-btn selected" data-v="F">Version F</button>
                </div>
            `;
            setTimeout(() => {
                document.querySelectorAll('#kpop-versions .ver-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        document.querySelectorAll('#kpop-versions .ver-btn').forEach(b => b.classList.remove('selected'));
                        this.classList.add('selected');
                    });
                });
            }, 100);

        } else {
            cartItems = 5; 
            banner.style.display = 'block';
            banner.innerHTML = "Only one version remains. 5 of 6 versions have already been collected. Add the final version to complete the collection.";
            progressFill.style.width = "83.3%"; 
            addBtn.style.background = "#8e24aa"; 
            addBtn.innerText = "COMPLETE MY COLLECTION";
            selectorContainer.innerHTML = `
                <label>COLLECTION STATUS (5/6 SECURED):</label>
                <div class="version-grid">
                    <button class="ver-btn secured" disabled>A ✓</button>
                    <button class="ver-btn secured" disabled>B ✓</button>
                    <button class="ver-btn secured" disabled>C ✓</button>
                    <button class="ver-btn secured" disabled>D ✓</button>
                    <button class="ver-btn secured" disabled>E ✓</button>
                    <button class="ver-btn target">F (Missing)</button>
                </div>
            `;
        }
    }

    cartCount.innerText = cartItems;

    addBtn.addEventListener('click', function(e) {
        e.preventDefault();
        cartItems++;
        cartCount.innerText = cartItems;
        toast.innerText = `✓ Successfully added to cart!`;
        toast.style.display = 'block';
        setTimeout(() => toast.style.display = 'none', 2500);
    });
});
