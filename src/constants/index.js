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

export const questionsRight = [
  {
    id:1,
    question:'What plants do you sell?',
    answer:'Extensive variety of plants available for sale.'
  },
  {
    id:2,
    question:'How much water for indoor plants?',
    answer:'Proper watering guidelines for each indoor plant.'
  },
  {
    id:3,
    question:'Care instructions for each plant?',
    answer:'Comprehensive care instructions provided for every plant.'
  },
]

export const questionsLeft = [
  {
    id:4,
    question:'Return or exchange policy?',
    answer:'Hassle-free return and exchange policy in place.'
  },
  {
    id:5,
    question:'Organic or pesticide use?',
    answer:'Commitment to organic practices, minimal pesticide use.'
  },
  {
    id:6,
    question:'Accepted payment methods?',
    answer:'Convenient payment options: Credit cards, PayPal, and more.'
  },
]

export const footerLinks = [
  {
    title: 'Our Services',
    links: [
      {
        name:'Pricing',
        link:'#'
      },
      {
        name:'Discounts',
        link:'#'
      },
      {
        name:'Report a bug',
        link:'#'
      },
      {
        name:'Terms of Services',
        link:'#'
      }
    ]
  },
  {
    title: 'Our Company',
    links: [
      {
        name:'Blog',
        link:'#'
      },
      {
        name:'Our Mission',
        link:'#'
      },
      {
        name:'Get in Touch',
        link:'#'
      },
    ]
  },
  {
    title: 'Our Address',
    links: [
      {
        name:'0123 - somewhere'
      },
      {
        name:'Out there - 54321'
      },
      {
        name:'222-333-444'
      },
    ]
  }
]