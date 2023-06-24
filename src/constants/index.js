import homeImg from '../assets/home-img.svg'
import plantImg from '../assets/plant-img.svg'
import officeImg from '../assets/office-img.svg'

import cactus1 from '../assets/cactus-plant-1.png'
import cactus2 from '../assets/cactus-plant-2.png'
import greenPlant from '../assets/green-plant.png'
import greenSnake from '../assets/green-snake-plant.png'
import suculent1 from '../assets/suculent-plant-1.png'
import suculent2 from '../assets/suculent-plant-2.png'



export const NavLinks = [
  {
    id:'home',
    tittle:'Home'
  },
  {
    id:'aboutUs',
    tittle:'About Us'
  },
  {
    id:'products',
    tittle:'Products'
  },
  {
    id:'faqs',
    tittle:'FAQs'
  },
  {
    id:'contactUs',
    tittle:'ContactUs'
  },
]

export const Plants = [
  {
    id: 'homePlant',
    img: homeImg,
    tittle: 'Home Plant',
    text: 'Beautify your space with our indoor plants. Create a serene atmosphere.',
  },
  {
    id: 'gardenPlant',
    img: plantImg,
    tittle: 'Garden Plant',
    text: ' Enhance your garden with our plants. Add color and life.',
  },
  {
    id: 'officePlant',
    img: officeImg,
    tittle: 'Office Plant',
    text: 'Improve your workspace with our plants. Boost productivity.',
  }
]

export const products = [
  {
    id: 'plant1',
    img: cactus1,
    name: 'Cactus Plant',
    price:'$11.99'
  },
  {
    id: 'plant2',
    img: greenSnake,
    name: 'Green Snake Plant',
    price:'$10.99'
  },
  {
    id: 'plant3',
    img: suculent1,
    name: 'Suculent Plant',
    price:'$7.99'
  },
  {
    id: 'plant4',
    img: suculent2,
    name: 'Suculent Plant',
    price:'$10.99'
  },
  {
    id: 'plant5',
    img: cactus2,
    name: 'Cactus Plant',
    price:'$4.99'
  },
  {
    id: 'plant6',
    img: greenPlant,
    name: 'Green Plant',
    price:'$12.99'
  }
]