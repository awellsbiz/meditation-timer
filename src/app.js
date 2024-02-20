// Nav bar functions for links and modal

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
