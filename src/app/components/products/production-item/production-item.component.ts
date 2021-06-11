import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProductionService } from 'src/app/services/production.service';
import { SidenavService } from 'src/app/services/sidenav.service';

declare var $: any;

@Component({
  selector: 'app-production-item',
  templateUrl: './production-item.component.html',
  styleUrls: ['./production-item.component.scss']
})
export class ProductionItemComponent implements OnInit {
  @ViewChildren('productionItem') things: QueryList<any> ;

  constructor(public productionService: ProductionService,private sidenavService: SidenavService) {}

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    this.things.changes.subscribe(t => {
      this.ngForRendered();
    })
  }

  ngForRendered() {
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      getSortData: {
        name: '.name',
        symbol: '.symbol',
        number: '.number parseInt',
        category: '[data-category]',
        weight: function( itemElem ) {
          var weight = $( itemElem ).find('.weight').text();
          return parseFloat( weight.replace( /[\(\)]/g, '') );
        }
      }
    });

    var filterFns = {
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };

    $('#filters').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });
    
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });
    //Patch Isotope Positions 
    setTimeout(function(){
      $grid.isotope({ filter: '*' });
    },300)
  }
  
  
  btn_id = '0';
  color = "basic";
  setActive(id: string) {
    this.btn_id = id;
    this.color = 'primary';
  }
  openDescription(index : string){
    this.productionService.getProductionDescription(index);
    this.sidenavService.open();
  }
}
