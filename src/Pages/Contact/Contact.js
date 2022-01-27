import React from 'react';
import "./Contact.css";

function Contact() {
    return (
        <div>
            <div className="containerContact">
      <div className="containerContact-left">
        <div className="contain">
        <div className="containerContact-small">
          <label  htmlFor="">Adınız</label>
          <input  placeholder="Ad" className="small-input" type="text"/><br/>
        </div>
        <div className="containerContact-small">
          <label htmlFor="">Soyadınız</label><br/>
          <input placeholder="Soyad" className="small-input" type="text"/>
        </div>
        </div>
        <div>
          <label  htmlFor="">Email</label><br/>
          <input placeholder="Email" className="big-input" type="text"/>
        </div>
        <div>
          <label  htmlFor="">Mövzu</label><br/>
          <input placeholder="Mövzu" className="big-input" type="text"/>
        </div>
        <div>
          <label htmlFor="">Mesaj</label><br/>
          <textarea  id="textareas" cols="30" rows="10" placeholder="Öz notunuzu qeyd edin"/> 
          
        </div>
        <button id="btn7">GÖNDƏR</button>
      </div>
      <div className="containerContact-right">
      <div className="containerContact-right-top">
        <p className="bold-p" >Ünvan</p>
        <p>AF MALL 4cü mərtəbə. CODERS EDUCATİON </p>
        <p className="bold-p" >Telefon</p>
        <p>+994 99 999 99 99</p>
        <p className="bold-p" >Email ünvanı</p>
        <p>email@info</p>
      </div>
      <div className="containerContact-right-bottom">
        <h3>Ətraflı məlumat</h3>
              <p>Ətrafli məlumat almaq üçün xahiş edirik elaqə nömrəsinə zeng edin və ya
                     sosial çəbəkələrdən bizə yazın
        </p>
      </div>
    </div>
    </div>
        </div>
    )
}

export default Contact
