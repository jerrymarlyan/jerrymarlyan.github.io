const nav = document.getElementById('nav');

window.addEventListener('scroll',function(){
    scrollposition = window.scrollY;

    if ( scrollposition >= 60 ) {
        nav.classList.add('nav-dark');
    } else if ( scrollposition <=60 ) {
        nav.classList.remove('nav-dark');
    }
})
  // Data PDF setiap project
  const projects = {
    1: {
      title: "Project Rumah Mewah 3 Lantai",
      pdfs: ["pdfs/project1_1.pdf", "pdfs/prject1_2.pdf"]
    },
    2: {
      title: "Project Gedung Tower Unidha",
      pdfs: ["pdfs/project2_1.pdf", "pdfs/project2_2.pdf"]
    },
    3: {
      title: "Project Setiabudi Apartement",
      pdfs: ["pdfs/project3_1.pdf", "pdfs/project3_2.pdf"]
    }
  };
  function openModal(projectId) {
  const modal = document.getElementById('pdfModal');
  const container = document.getElementById('pdfContainer');
  const title = document.getElementById('modalTitle');

  title.innerText = projects[projectId].title;
  container.innerHTML = "";

  projects[projectId].pdfs.forEach(pdf => {
    const iframe = document.createElement('iframe');
    iframe.src = pdf;
    container.appendChild(iframe);
  });

  // Tambahkan class 'show' dengan delay kecil agar animasi bisa jalan
  modal.style.display = 'block';
  setTimeout(() => modal.classList.add('show'), 10);
}

function closeModal() {
  const modal = document.getElementById('pdfModal');
  modal.classList.remove('show');

  // Delay agar animasi fade-out selesai dulu sebelum disembunyikan
  setTimeout(() => {
    modal.style.display = 'none';
  }, 400);
}
