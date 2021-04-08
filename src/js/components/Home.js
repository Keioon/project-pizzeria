/* global Flickity */
import {templates, select} from '../setting.js';
import {app} from '../app.js';

class Home{
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
    thisHome.initWidgets();

    thisHome.navigate();
  }

  render(element){
    const thisHome = this;
    const generatedHTML = templates.homeWidget();

    thisHome.dom = {};

    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;

    thisHome.dom.links = document.querySelectorAll(select.home.links);
  }

  initWidgets(){
    const thisHome = this;
    thisHome.carousel = document.querySelector(select.widgets.home.carousel);
    thisHome.flickity = new Flickity(thisHome.carousel, {
      cellAlign: 'right',
      contain: 'true',
      autoPlay: 'true',
      prevNextButtons: false,
      wrapAround: true,
    });
  }

  navigate(){
    const thisHome = this;
    app.initLinks(thisHome.dom.links);
  }
}

export default Home;