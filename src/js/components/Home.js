import {templates, select} from '../setting.js';
//import {app} from '../app.js';

class Home{
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
    thisHome.initWidgets();

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

  initWidgets(){
    const thisHome = this;
    thisHome.carousel = document.querySelector(select.widets.home.carousel);
  }
}

export default Home;