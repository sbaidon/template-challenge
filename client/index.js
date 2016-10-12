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
import { navbarItems, chef, cookingItems, seasonItems, restaurantItems, lastPost, footerItems } from './items'

const root = document.getElementById('root');

getBlogPosts()
  .then((posts) => {
    posts.push(lastPost);
    const guestBlogging = document.getElementById('blog');
    guestBlogging.innerHTML = specialSeasons({items: posts, blog: true});
  });

//const blogItems = fetch('localhost:8080/blog');
const templates = {
  "navbar": navbar({items: navbarItems, navbar: true}),
  "section__chef" : section({chef}),
  "section__threeItems": threeItemSection({items: cookingItems, left: true}),
  "section__specials": specialSeasons({items: seasonItems, specials: true}),
  "section__threeItems--right": threeItemSection({items: restaurantItems, right: true}),
  "section__threeItems--blog": specialSeasons({items: []}),
  "navbar--bottom": navbar({items: footerItems})
};

for(var item in templates) {
  const section = document.createElement('section');
  section.innerHTML = templates[item]
  section.className = item;
  if (item === 'section__threeItems--blog') {
    section.id = 'blog';
  }

  root.appendChild(section);
   // propertyName is what you want
   // you can get the value like this: myObject[propertyName]
}