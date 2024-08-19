import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ejemplo2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-ejemplo2.component.html',
  styleUrl: './signal-ejemplo2.component.scss'
})
export default class SignalEjemplo2Component {
  contador =signal(0)

constructor(){
  // setInterval(()=>this.contador.set(this.contador()+1),1000);
}

}
