import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnChanges {

  quantidade: number;


  @Input() atualizarQuantidade: boolean;  
  @Output() atualizarCarrinho: EventEmitter<any> = new EventEmitter();

  constructor( private storage : StorageService) { 
    if(this.storage.recuperarCarrinho() != null){
      this.quantidade = this.storage.recuperarCarrinho().length;
    }else{
      this.quantidade = 0;
    }
   }


  ngOnChanges(): void {

    if(this.atualizarQuantidade){
      this.quantidade = this.storage.recuperarCarrinho().length;
      setTimeout(() => {
        this.atualizarCarrinho.emit();
      })
    }

  }

}
