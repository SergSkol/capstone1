const program = [
  {
    name: 'Conference',
    image: './image/program_icon_01.png',
    description: 'Listen to lectures from speakers from around the world and learn about the latest trends in the world.',
  },
  {
    name: 'Exhibition',
    image: './image/program_icon_02.png',
    description: 'Let`s meet the creations of artists from various fields who share the open spirit of art.',
  },
  {
    name: 'Forum',
    image: './image/program_icon_03.png',
    description: 'We have time to share our thoughts and opinions with experts by topic.',
  },
  {
    name: 'Workshop',
    image: './image/program_icon_04.png',
    description: 'You can create your own masterpieces instead of just looking at them.',
  },
  {
    name: 'Party',
    image: './image/program_icon_05.png',
    description: 'Create opportunities to freely network with artists from around the world.',
  },
];

function addElement(elementType, parent, className) {
  const element = document.createElement(elementType);
  element.classList.add(className);
  parent.appendChild(element);
  return element;
}

const programList = document.querySelector('.program-list');

window.onload = () => {
  program.forEach((item) => {
    const programItem = addElement('div', programList, 'program-item');
    const featuredImage = addElement('img', programItem, 'program-image');
    featuredImage.src = item.image;
    const programName = addElement('div', programItem, 'program-name');
    programName.innerHTML = item.name;
    const programDescription = addElement('div', programItem, 'program-description');
    programDescription.innerHTML = item.description;
  });
};
