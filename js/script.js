document.addEventListener('DOMContentLoaded', function() {
  // -------------------------------
  // Sticky header (only desktop)
  // -------------------------------
  const header = document.getElementById("header_scroll_fixed");
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 991) {
      if (window.pageYOffset > 200) {
        header.classList.add("header_scroll_sticky");
      } else {
        header.classList.remove("header_scroll_sticky");
      }
    } else {
      header.classList.remove("header_scroll_sticky");
    }
  });


  // -------------------------------
  // Custom select dropdown
  // -------------------------------
  const customSelectWrappers = document.querySelectorAll('.custom-select-wrapper');
  customSelectWrappers.forEach(wrapper => {
    const selected = wrapper.querySelector('.custom-select-selected');
    const optionsContainer = wrapper.querySelector('.custom-select-options');
    const hiddenInput = wrapper.nextElementSibling;

    selected.addEventListener('click', () => {
      const isVisible = optionsContainer.style.display === 'block';
      document.querySelectorAll('.custom-select-options').forEach(opt => opt.style.display = 'none');
      optionsContainer.style.display = isVisible ? 'none' : 'block';
    });

    optionsContainer.querySelectorAll('div').forEach(option => {
      option.addEventListener('click', () => {
        selected.innerHTML = option.innerHTML + `<span class="arrow">&#9662;</span>`;
        hiddenInput.value = option.dataset.value;
        optionsContainer.style.display = 'none';
      });
    });

    document.addEventListener('click', e => {
      if (!wrapper.contains(e.target)) {
        optionsContainer.style.display = 'none';
      }
    });
  });


  // -------------------------------
  // Checkbox validation
  // -------------------------------
  const checkbox = document.getElementById('agree');
  const submitBtn = document.getElementById('submitBtn');

  checkbox.addEventListener('change', () => {
    submitBtn.disabled = !checkbox.checked;
  });

  document.getElementById('booking_form').addEventListener('submit', e => {
    if (!checkbox.checked) {
      e.preventDefault();
      alert('Please agree to terms before submitting!');
    }
  });


  // -------------------------------
  // Scroll icon show/hide after 2000px
  // -------------------------------
  const scrollIcon = document.getElementById('scrollIcon');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 1000) {
      scrollIcon.style.display = 'block';
    } else {
      scrollIcon.style.display = 'none';
    }
  });


  // -------------------------------
  // Scroll icon click → smooth scroll to top
  // -------------------------------
  scrollIcon.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });







});