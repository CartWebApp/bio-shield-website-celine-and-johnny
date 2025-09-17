 // Mobile menu toggle
    function toggleMenu() {
      const navLinks = document.getElementById('nav-links');
      const btn = document.querySelector('.menu-toggle');
      navLinks.classList.toggle('show');

      // update aria-expanded for accessibility
      const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
      btn.setAttribute('aria-expanded', !expanded);
    }

    // Hero fade in on load
    window.addEventListener('load', () => {
      document.getElementById('hero').classList.add('visible');
    });
   
    function updateTotal() {
      const rows = document.querySelectorAll('tbody tr');
      let grandTotal = 0;

      rows.forEach(row => {
          const quantity = row.querySelector('input[type="number"]').value;
          const price = parseFloat(row.cells[2].textContent.replace('$', ''));
          const total = quantity * price;
          row.querySelector('.total').textContent = '$' + total.toFixed(2);
          grandTotal += total;
      });

      document.getElementById('grandTotal').textContent = '$' + grandTotal.toFixed(2);
  }