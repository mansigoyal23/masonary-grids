import { Component, OnInit } from '@angular/core';
import { Masonry, MasonryGridItem } from 'ng-masonry-grid';

@Component({
  selector: 'app-masonary',
  templateUrl: './masonary.component.html',
  styleUrls: ['./masonary.component.scss']
})
export class MasonaryComponent implements OnInit {

  constructor() { }

  _masonry: Masonry;
  masonryItems: any[]; 

  onNgMasonryInit($event: Masonry) {
    this._masonry = $event;
  }

  removeItem($event: any) {
    if (this._masonry) {
      this._masonry.removeItem($event.currentTarget)
          .subscribe((item: MasonryGridItem) => {
            if (item) {
              let id = item.element.getAttribute('id');
              let index = id.split('-')[2];
              this.masonryItems.splice(index, 1); 
            }
          });
    }
  }
  
  removeFirstItem() {
    if (this._masonry) {
      this._masonry.removeFirstItem()
          .subscribe( (item: MasonryGridItem) => {
            if (item) {
              let id = item.element.getAttribute('id');
              let index = id.split('-')[2];
              this.masonryItems.splice(index, 1);
            }
          });
    }
    this._masonry.reOrderItems();
  }

  removeAllItems() {
    if (this._masonry) {
      this._masonry.removeAllItems()
          .subscribe( (items: MasonryGridItem) => {
              // remove all items from the list
              this.masonryItems = [];
          });
    }
  }

  reorderItems() {
    if (this._masonry) {
        this._masonry.reOrderItems();
    }
  }
  
  
  ngOnInit() {
    let self = this;
    setTimeout(function(){self.reorderItems();}, 200);
  }
}