//css
import css from './styles/styles.styl';

//templates
import navbar from './templates/navbar.handlebars';
import section from './templates/section.handlebars';
import threeItemSection from './templates/three-items.handlebars';
import specialSeasons from './templates/specials-season.handlebars';

//Api
import { getBlogPosts } from './api';

//Data
import { navbarItems, chef, cookingItems, seasonItems, restaurantItems, lastPost } from './items'

const root = document.getElementById('root');

getBlogPosts()
  .then((posts) => {
    posts.push(lastPost);
    const guestBlogging = document.getElementById('blog');
    guestBlogging.innerHTML = specialSeasons({items: posts, blog: true});
  });

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

threeItems.innerHTML = threeItemSection({items: cookingItems, left: true});
threeItems.className = 'three-items-section'

special.innerHTML = specialSeasons({items: seasonItems, specials: true});
special.className = 'special-seasons';

threeItemsRight.innerHTML = threeItemSection({items: restaurantItems, right: true});
threeItemsRight.className = 'three-items-section right'

guestBlogging.innerHTML = specialSeasons({items: [], blog: true});
guestBlogging.className = 'special-seasons blog';
guestBlogging.id = 'blog';

footer.innerHTML = navbar({items: footerItems, footer: true});
footer.className = 'navbar-container footer'

root.appendChild(nav);
root.appendChild(mainSection);
root.appendChild(threeItems);
root.appendChild(special);
root.appendChild(threeItemsRight);
root.appendChild(guestBlogging);
root.appendChild(footer);





