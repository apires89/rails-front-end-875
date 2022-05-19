import { Controller } from "@hotwired/stimulus"
import Typed from 'typed.js';


export default class
  extends Controller {
  connect() {
    var options = {
      strings: ["Change your life", "Learn to code"],
      typeSpeed: 50,
      loop: true
    };
    new Typed(this.element, options)
  }
}

