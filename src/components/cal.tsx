import React from 'react';
import './cal.css'
import { IonDatetime } from '@ionic/react';
function cal() {
  return (<div className="container">
    <IonDatetime presentation="date" className='calander'>
      </IonDatetime></div>);
}
export default cal;