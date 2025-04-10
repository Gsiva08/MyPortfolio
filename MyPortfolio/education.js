// Add hover effect for percentages
document.querySelectorAll('.percentage').forEach((element) => {
    element.addEventListener('mouseenter', () => {
        const hoverText = element.getAttribute('data-hover');
        element.textContent = hoverText;
    });

    element.addEventListener('mouseleave', () => {
        const hoverText = element.getAttribute('data-hover');
        element.textContent = hoverText;
    });
});
