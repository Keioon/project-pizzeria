import {templates, select} from '../setting.js';
import {app} from '../app.js';
//import Flickity from '../flickity.pkgd.min.js';


class Home{
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
    // thisHome.initWidgets();

    thisHome.initActions();
    thisHome.navigate();
  }

  render(element){
    const thisHome = this;
    const generatedHTML = templates.homeWidget();

    thisHome.dom = {};

    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;

    thisHome.dom.orderOnline = document.querySelector(select.home.order);
    thisHome.dom.bookTable = document.querySelector(select.home.table);
  }

  /*initWidgets(){
    const thisHome = this;
    thisHome.carousel = document.querySelector(select.widets.home.carousel);
    thisHome.flickity = new Flickity(thisHome.element, {
      cellAlign: 'left',
      contain: 'true',
      autoPlay: 'true',
      prevNextButtons: false,
      wrapAround: true,
    });
  }*/

  initActions(){
    const thisHome = this;

    thisHome.dom.orderOnline.addEventListener('click', function(event){
      event.preventDefault();
    });

    thisHome.dom.bookTable.addEventListener('click', function(event){
      event.preventDefault();
    });
  }

  navigate(){
    const thisHome = this;

    thisHome.dom.bookTable.addEventListener('click', function(){
      app.activatePage('booking');
      window.location.hash = '/#booking';
    });

    thisHome.dom.orderOnline.addEventListener('click', function(){
      app.activatePage('order');
      window.location.hash = '/#order';
    });
  }
}

export default Home;