document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.getElementById("sidebar");
  const closeButton = document.getElementById("closeButton");

  if (!hamburger || !sidebar || !closeButton) {
    console.error("Error: Elements missing. Check your HTML.");
    return;
  }

  // Open Sidebar
  hamburger.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  // Close Sidebar When Clicking the Close Button
  closeButton.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });

  // Close Sidebar When Clicking Outside
  document.addEventListener("click", (event) => {
    if (
      !sidebar.contains(event.target) &&
      !hamburger.contains(event.target) &&
      sidebar.classList.contains("active")
    ) {
      sidebar.classList.remove("active");
    }
  });

  // Close Sidebar When Clicking Any Link Inside It
  document.querySelectorAll("#sidebar a").forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
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