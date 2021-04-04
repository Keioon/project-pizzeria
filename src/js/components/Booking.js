import {select, templates} from '../setting.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';

class Booking{
  constructor(element){
    const thisBooking = this;

    thisBooking.render(element);
    thisBooking.initWidgets();
  }

  render(element){
    const thisBooking = this;

    /* generate HTML using template */
    const generatedHTML = templates.bookingWidget(element);
    
    thisBooking.dom = {}; 
    
    thisBooking.dom.wrapper = document.querySelector(select.containerOf.booking);
    thisBooking.dom.wrapper.innerHTML = generatedHTML;

    
    thisBooking.dom.peopleAmount = element.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = element.querySelector(select.booking.hoursAmount);
    
    thisBooking.dom.datePicker = element.querySelector(select.widgets.datePicker.wrapper);
    thisBooking.dom.hourPicker = element.querySelector(select.widgets.hourPicker.wrapper);
    console.log('thisBooking.dom.hourPicker', thisBooking.dom.hourPicker);
  }

  initWidgets(){
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);

    thisBooking.datePicker = new DatePicker(thisBooking.dom.datePicker);
    thisBooking.hourPicker = new HourPicker(thisBooking.dom.hourPicker);
    console.log('thisBooking.hourPicker', thisBooking.hourPicker);

    thisBooking.dom.wrapper.addEventListener('updated', function(){
    });
  }
}

export default Booking;