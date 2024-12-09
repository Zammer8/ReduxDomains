const container = document.getElementById('container');
const hoverBox = document.getElementById('hover-box');
const hoverName = document.getElementById('hover-name');
const hoverDescription = document.getElementById('hover-description');

// Add parallax effect
container.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  container.style.transform = `translate(${-x * 10}px, ${-y * 10}px)`;
});

// Handle hover and click for dots
document.querySelectorAll('.dot').forEach(dot => {
  dot.addEventListener('mouseover', (e) => {
    const name = e.target.dataset.name || e.target.parentElement.dataset.name;
    const description = e.target.dataset.description || e.target.parentElement.dataset.description;

    hoverName.textContent = name;
    hoverDescription.textContent = description;

    hoverBox.style.display = 'block';
    hoverBox.style.left = `${e.pageX + 10}px`;
    hoverBox.style.top = `${e.pageY + 10}px`;
  });

  dot.addEventListener('mousemove', (e) => {
    hoverBox.style.left = `${e.pageX + 10}px`;
    hoverBox.style.top = `${e.pageY + 10}px`;
  });

  dot.addEventListener('mouseout', () => {
    hoverBox.style.display = 'none';
  });

  dot.addEventListener('click', (e) => {
    const link = e.target.dataset.link || e.target.parentElement.dataset.link;
    window.open(link, '_blank');
  });
});
