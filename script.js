function showSelection(sectionId){
    //Hide all sections
    const sections= document.querySelectorAll('.main-content section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    //show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}
