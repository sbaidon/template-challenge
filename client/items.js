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

import 'whatwg-fetch';

export const navbarItems = [
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

export const footerItems = [
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

export const chef = {
    image: imgChef,
    name: 'Gila De Lauren',
};

export const cookingItems = [
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

export const seasonItems = [
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

export const restaurantItems = [
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
];

export const lastPost = {
      image: mediterranean,
      title: 'A New Favorite Take on an Old Mediterranean Grain',
      'description': `Packed with complex carbohydrates and fiber, delicious and hearty whole grains play an important part in the Mediterranean diet. Look beyond rice and pasta, because it's worth getting to know farro, amaranth, millet, freekah and wheat berries...`
    }