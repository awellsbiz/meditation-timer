// const aboutContent = document.getElementById('about-link');

function openModal() {
  const showModal = document.querySelector('.modal');
  showModal.style.display = 'block';
  console.log('Modal clicked');
}

function closeModal() {
  const closeModal = document.querySelector('.modal');
  closeModal.style.display = 'none';
  console.log('Modal closed');
}
