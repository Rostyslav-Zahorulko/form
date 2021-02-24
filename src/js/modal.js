import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';
import refs from './refs';

refs.showModalBtn.addEventListener('click', showLightbox);

function showLightbox() {
  const instance = basicLightbox.create(
    `<div class="modal">
        <form class="form">
            <h2 class=form-title>Request Demo</h2>
            <div class="form-content">
                <div class="form-fields">
                    <div class="form-field">
                        <label class="form-label" for="user-name">Name</label>
                        <input class="form-input" type="text" name="name" id="user-name" />
                    </div>
                    
                    <div class="form-field">
                        <label class="form-label" for="user-mail">Email</label>
                        <input class="form-input" type="email" name="email" id="user-email"/>
                    </div>
                    
                    <div class="form-field">
                        <label class="form-label" for="user-web">Web</label> 
                        <input class="form-input" type="url" name="web" id="user-web"/>    
                    </div>  
                </div>   
                
                <div>
                    <label class="form-label" for="message">Message</label>
                    <textarea class="form-textarea" name="message" rows="3" id="message"></textarea>
                </div>
            </div> 
            <button class="form-submit-btn" type="submit">Send</button>     
        </form>
    </div>`,
  );

  instance.show();
}
