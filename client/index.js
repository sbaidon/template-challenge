//css
import css from './styles/styles.styl';

//templates
import navbar from './templates/navbar.handlebars';
import section from './templates/section.handlebars';
import threeItemSection from './templates/three-items.handlebars';
import specialSeasons from './templates/specials-season.handlebars';

//images
import deviledEggs from './images/img-deviled-eggs.png';
import freshSauce from './images/img-fresh-tomato-sauce-cover.png';
import roulade from './images/img-roulade-cover.png';
import imgChef from './images/img-chef.png';
import bbq from './images/img-the-ingredients-cover.png';
import fruitcake from './images/img-fruitcake-cover.png';
import salmon from './images/img-salmon-cover.png';
import deliBar from './images/img-restaurante-1.png';
import newYorkBar from './images/img-restaurant-2.png';
import tokioBar from './images/img-restaurant-3.png';
import mediterranean from './images/img-eggplant-manchego-salad-cover.png';

const root = document.getElementById('root');

const navbarItems = [
  {
    title: 'Recipes'
  },
  {
    title: 'Gallery'
  },
  {
    title: 'Contact'
  }
];

const footerItems = [
  {
    title: 'Contact'
  },
  {
    title: 'Bio'
  },
  {
    title: 'Press'
  }
];

const chef = {
    image: imgChef,
    name: 'Gila De Lauren',
};

const items = [
  {
    image: deviledEggs,
    description: `Bar Americain's Pickled Shrimp Deviled Eggs with Cornichon Remoulade`
  },
  {
    image: roulade,
    description: `Turkey Roulade with "Stovetop" Stuffing`
  },
  {
    image: freshSauce,
    description: 'Pasta with Fresh Tomato Sauce'
  }
];

const seasonItems = [
  {
    image: bbq,
    title: 'Barbeque: Cali Style',
    description: `You've undoubtedly heard of Carolina Barbeque and Texas BBQ but have you ever tried Santa Maria Barbeque? Unlike the aforementioned styles, Santa Maria Barbeque doesn't involve a long, slow cooking method or sweet sauces, but is instead a menu featuring a well-seasoned California tri-trip cooked over native red oak coals on a special hand-cranked grill, accompanied by pinquinto beans, salsa, green, salad, and garlic bread`
  },
  {
    image: fruitcake,
    title: 'The Perfect Fruitcake',
    description: `The poor, maligned fruit cake... probably one of the most hated cakes in the existence of baking. Is it any wonder? Would you want an incredibly dense, overly sweet, horribly boozy "cacke" chock-full of fluorescent-colored candied fruit pieces?` 
  },
  {
    image: salmon,
    title: `Spice-Crusted Salmon: A Holiday Dinner That's As Impressive As It Is Quick`,
    description: `Holiday season is well underway, and you know what that means: people are BUSY! With that in mind, I developed a festive recipe that's quick enough to serve on a weeknight (with some make-aheads), and beautiful and impressive enough to serve as the centerpiece for a holiday meal`
  }
];

const restaurants = [
  {
    image: deliBar,
    title: 'DELI BAR',
    description: '156 Lafayette Street \n New York, NY 10012 \n 212 677 6400 \n delibar.com'
  },
  {
    image: newYorkBar,
    title: 'BAR NEW YORK',
    description: '756 W. 52nd Street \n New York, NY 10019 \n 214 265 8900 \n bar-new-york.com'
  },
  {
    image: tokioBar,
    title: 'BAR TOKIO SUN',
    description: '11 Mohegan Sun Boulevard \n Uncasvile, \n CT 06382 756 862 3529 \n tokiosun.com'
  }
]

const blogItems = [
  {
    title: 'Rhubarb: The Vegetable That Acts Like a fruit',
    description: `May is all about vegetables on bobbyflay.com and one of the most popular springtime vegetables ir rhubarb. That's right, I said vegetable. Did you know that rhubarb is actually a vegetable, not a fruit? \n \n While rhubarb is typically treated like a fruit and most often shows up in desserts in this country, it is also very good in savory dishes too and when used in glazed and chutneys pairs really well with pork, lamb and chicken. But, since I could live on pastries (and often do) I love using rhubarb in a variety of desserts.`
  },
  {
    title: 'The Perfect Fruitcake',
    description: `The poor, maligned fruit cake... probably one of the most hated cakes in the existence of baking. Is it any wonder? Would you want an incredibly dense, overly sweet, horribly boozy "cacke" chock-full of fluorescent-colored candied fruit pieces?` 
  },
  {
    title: `A New Favorite Take on an Old Mediterranean Grain`,
    image: mediterranean,
    description: `Holiday season is well underway, and you know what that means: people are BUSY! With that in mind, I developed a festive recipe that's quick enough to serve on a weeknight (with some make-aheads), and beautiful and impressive enough to serve as the centerpiece for a holiday meal`
  }
];

//const blogItems = fetch('localhost:8080/blog');


const nav = document.createElement('div');
const mainSection = document.createElement('div');
const threeItems = document.createElement('div');
const special = document.createElement('div');
const threeItemsRight = document.createElement('div');
const guestBlogging = document.createElement('div');
const footer = document.createElement('div');

nav.innerHTML = navbar({items: navbarItems, navbar: true});
nav.className = 'navbar-container';

mainSection.innerHTML = section({chef});
mainSection.className = 'section-container';

threeItems.innerHTML = threeItemSection({items, left: true});
threeItems.className = 'three-items-section'

special.innerHTML = specialSeasons({items: seasonItems, specials: true});
special.className = 'special-seasons';

threeItemsRight.innerHTML = threeItemSection({items: restaurants, right: true});
threeItemsRight.className = 'three-items-section right'

guestBlogging.innerHTML = specialSeasons({items: blogItems, blog: true});
guestBlogging.className = 'special-seasons blog';

footer.innerHTML = navbar({items: footerItems, footer: true});
footer.className = 'navbar-container footer'

root.appendChild(nav);
root.appendChild(mainSection);
root.appendChild(threeItems);
root.appendChild(special);
root.appendChild(threeItemsRight);
root.appendChild(guestBlogging);
root.appendChild(footer);

