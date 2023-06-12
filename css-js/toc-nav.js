

document.addEventListener('DOMContentLoaded', function() {
  console.log('this is being read');


  const sections = document.querySelectorAll('h2');
  const links = document.querySelectorAll('#TOC a');

  window.addEventListener('scroll', (event) => {
    let scrollTop = window.scrollY;

    // highlight the last scrolled-to: set everything inactive first
    links.forEach((link, index) => {
      link.classList.remove("active");
    });

    // then iterate backwards, on the first match highlight it and break
    for (var i = sections.length-1; i > 0; i--) {
      if (scrollTop > sections[i].offsetTop - 10) {
        const activeLink = document.querySelector(`#toc-${sections[i].id}`);
        // const activeLink = document.querySelector(`#${sections[i].id}`);

        if (activeLink) {
          activeLink.classList.add('active');
        }
        break;
      }
    }
  });

});
