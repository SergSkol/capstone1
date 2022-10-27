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

const speakers = [
  {
    name: 'Anna Shkolnik',
    photo: './image/speakers/Anna.jpg',
    title: 'Linz Mittelschule 11, Student',
    description: 'Became the leading figure in own environment by challenging the boundaries of artistic style with her paintings, which combined abstraction and representation.',
  },
  {
    name: 'Dima Eshkol',
    photo: './image/speakers/Dima.jpg',
    title: 'Kyiv Euroland, Student',
    description: 'His art is incorporating a variety of styles and emphasized on conveying strong emotional or expressive content through abstraction.',
  },
  {
    name: 'Levi Schulmann',
    photo: './image/speakers/Lev.jpg',
    title: 'Linz Volksschule 20, Student',
    description: 'He is working in a variety of media including sculpture and paper cut-outs but is most famous for the masterpieces he created as a painter.',
  },
  {
    name: 'Irene Weisero',
    photo: './image/speakers/Ira.jpg',
    title: 'TAK Japan, Team Lead',
    description: 'Focusing on a collaborative approach in a networked environment, she developed the concept of co-production based on sharing.',
  },
  {
    name: 'Serg Skol',
    photo: './image/speakers/Serg.jpg',
    title: 'NVS Ukraine, Commercial Excellence Head',
    description: 'After working in various fields such as Sales Force manager and Commercial Excellence Head, he is currently in charge of web-design and programming.',
  },
  {
    name: 'Jackie (Benya) Russel',
    photo: './image/speakers/Jack.jpg',
    title: 'Founder, Foxtrott',
    description: 'Russel is primarily a representative of the working environment. High energy and drive make the author ideal for various arts such as flyball or agility.',
  },
];

function addElement(elementType, parent, className) {
  const element = document.createElement(elementType);
  element.classList.add(className);
  parent.appendChild(element);
  return element;
}

window.onload = () => {
  const programList = document.querySelector('.program-list');
  program.forEach((item) => {
    const programItem = addElement('div', programList, 'program-item');
    const featuredImage = addElement('img', programItem, 'program-image');
    featuredImage.src = item.image;
    const programName = addElement('div', programItem, 'program-name');
    programName.innerHTML = item.name;
    const programDescription = addElement('div', programItem, 'program-description');
    programDescription.innerHTML = item.description;
  });

  const speakersList = document.querySelector('.speakers-list');

  speakers.forEach((speaker) => {
    const speakerItem = addElement('div', speakersList, 'speaker-item');
    const speakerImage = addElement('img', speakerItem, 'speaker-image');
    speakerImage.src = speaker.photo;
    const speakerDetails = addElement('div', speakerItem, 'speaker-details');
    const speakerName = addElement('div', speakerDetails, 'speaker-name');
    speakerName.innerHTML = speaker.name;
    const speakerTitle = addElement('div', speakerDetails, 'speaker-title');
    speakerTitle.innerHTML = speaker.title;
    const speakerDescription = addElement('div', speakerDetails, 'speaker-description');
    speakerDescription.innerHTML = speaker.description;
  });
};

// Popup menu

const menuIcon = document.querySelector('.burger-image');
const hideIcon = document.querySelector('.close-image');
const menuBox = document.querySelector('.mobile-menu-box');
const menuItems = document.querySelectorAll('.mobile-menu-item');

menuIcon.addEventListener('click', () => {
  menuBox.classList.toggle('open-menu');
});

hideIcon.addEventListener('click', () => {
  menuBox.classList.toggle('open-menu');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuBox.classList.toggle('open-menu');
  });
});