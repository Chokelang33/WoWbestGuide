// Simple hover effect for buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.color = '#ffffff'; // Ændrer knapfarven til hvid, når musen er over
    });
    button.addEventListener('mouseleave', () => {
        button.style.color = '#1f1f1f'; // Ændrer knapfarven tilbage til mørk, når musen er væk
    });
});
