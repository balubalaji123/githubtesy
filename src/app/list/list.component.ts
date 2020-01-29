import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListComponent {
  // ontime(t){
  //   setTimeout(() => {
  //     t;
  // }, 1000);
  // }
constructor() { 
}
 
    dataSource =  ELEMENT_DATA;
    // public a=12;
    columnsToDisplay = ['name', 'position','Subject', 'Time'];
    expandedElement: PeriodicElement | null;
  }
  export interface PeriodicElement {
    
    name: string;
    position: number;
    Subject: string;
    Time: number;
    description: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {
      position: 1,
      name: 'Hydrogen',
       Time: 1.0079,
      Subject: 'H',
      description: `Hydrogen is a chemical element with Subject H and atomic number 1. With a standard  atomic  Time of 1.008, hydrogen is the lightest element on the periodic table.`
    },
    {
      position: 2,
      name: 'Helium',
       Time: 213,
      Subject: 'He',
      description: `Helium is a chemical element with Subject He and atomic number 2. It is a
          colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
          group in the periodic table. Its boiling point is the lowest among all the elements.`
     }, 
  //{
  //     position: 3,
  //     name: 'Lithium',
  //      Time: 6.941,
  //     Subject: 'Li',
  //     description: `Lithium is a chemical element with Subject Li and atomic number 3. It is a soft,
  //         silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
  //         lightest solid element.`
  //   }, {
  //     position: 4,
  //     name: 'Beryllium',
  //      Time: 9.0122,
  //     Subject: 'Be',
  //     description: `Beryllium is a chemical element with Subject Be and atomic number 4. It is a
  //         relatively rare element in the universe, usually occurring as a product of the spallation of
  //         larger atomic nuclei that have collided with cosmic rays.`
  //   }, {
  //     position: 5,
  //     name: 'Boron',
  //      Time: 10.811,
  //     Subject: 'B',
  //     description: `Boron is a chemical element with Subject B and atomic number 5. Produced entirely
  //         by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
  //         low-abundance element in the Solar system and in the Earth's crust.`
  //   }, {
  //     position: 6,
  //     name: 'Carbon',
  //      Time: 12.0107,
  //     Subject: 'C',
  //     description: `Carbon is a chemical element with Subject C and atomic number 6. It is nonmetallic
  //         and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
  //         to group 14 of the periodic table.`
  //  },
    // {
    //   position: 7,
    //   name: 'Nitrogen',
    //    Time: 14.0067,
    //   Subject: 'N',
    //   description: `Nitrogen is a chemical element with Subject N and atomic number 7. It was first
    //       discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
    // }, {
    //   position: 8,
    //   name: 'Oxygen',
    //    Time: 15.9994,
    //   Subject: 'O',
    //   description: `Oxygen is a chemical element with Subject O and atomic number 8. It is a member of
    //        the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
    //        agent that readily forms oxides with most elements as well as with other compounds.`
    // }, {
    //   position: 9,
    //   name: 'Fluorine',
    //    Time: 18.9984,
    //   Subject: 'F',
    //   description: `Fluorine is a chemical element with Subject F and atomic number 9. It is the
    //       lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
    //       conditions.`
    // }, {
    //   position: 10,
    //   name: 'Neon',
    //    Time: 20.1797,
    //   Subject: 'Ne',
    //   description: `Neon is a chemical element with Subject Ne and atomic number 10. It is a noble gas.
    //       Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
    //       two-thirds the density of air.`
    // },

  ];


