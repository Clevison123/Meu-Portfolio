document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const closeButton = document.getElementById("closeButton");
  const body = document.body;

  // Error handling
  if (!hamburger || !sidebar || !closeButton) {
    console.error("Error: Essential elements missing from DOM");
    return;
  }

  // Sidebar controls
  const toggleSidebar = (isOpen) => {
    sidebar.classList.toggle("active", isOpen);
    body.classList.toggle("sidebar-active", isOpen);
  };

  // Event listeners
  hamburger.addEventListener("click", () => toggleSidebar(true));
  closeButton.addEventListener("click", () => toggleSidebar(false));

  // Close when clicking outside
  document.addEventListener("click", (event) => {
    if (sidebar.classList.contains("active") &&
        !sidebar.contains(event.target) &&
        !hamburger.contains(event.target)) {
      toggleSidebar(false);
    }
  });

  // Close when clicking links
  document.querySelectorAll("#sidebar a").forEach(link => {
    link.addEventListener("click", () => toggleSidebar(false));
  });

  // Optional: Close on ESC key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && sidebar.classList.contains("active")) {
      toggleSidebar(false);
    }
  });
});
//////////////////////////////////////////////////////////

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

//meu portfolio projects

document.addEventListener("DOMContentLoaded", function() {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioItems.forEach(function(item) {
    const imageWrapper = item.querySelectorAll(".image-wrapper");
    const prevButton = item.querySelector(".prev");
    const nextButton = item.querySelector(".next");
    let currentImageIndex = 0;

    function showImage(index) {
      imageWrapper.forEach(function(wrapper, i) {
        if (i === index) {
          wrapper.style.display = "block";
        } else {
          wrapper.style.display = "none";
        }
      });
    }

    function prevImage() {
      currentImageIndex--;
      if (currentImageIndex < 0) {
        currentImageIndex = imageWrapper.length - 1;
      }
      showImage(currentImageIndex);
    }

    function nextImage() {
      currentImageIndex++;
      if (currentImageIndex >= imageWrapper.length) {
        currentImageIndex = 0;
      }
      showImage(currentImageIndex);
    }

    prevButton.addEventListener("click", prevImage);
    nextButton.addEventListener("click", nextImage);

    showImage(currentImageIndex);
  });
});