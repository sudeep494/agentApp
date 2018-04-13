import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-list',
	templateUrl: 'list.html'
})
export class ListPage {
	transactions: Array<{date: string, type: string, amount: string, city: string, earning: string}>;

	constructor(public navCtrl: NavController, public navParams: NavParams) {

		this.transactions = [
			{'date': '01/01/2017', 'type': 'Buy Side', 'amount': '320,000', 'city': 'Edina', 'earning': '8788'},
			{'date': '01/17/2017', 'type': 'Seller Side', 'amount': '425,000', 'city': 'Lakeville', 'earning': '9979'},
			{'date': '03/05/2017', 'type': 'Buy Side', 'amount': '320,600', 'city': 'Blaine', 'earning': '6078'},
			{'date': '05/20/2017', 'type': 'Seller Side', 'amount': '427,000', 'city': 'Eden Prairie', 'earning': '7983'},
			{'date': '06/14/2017', 'type': 'Buy Side', 'amount': '421,000', 'city': 'Edina', 'earning': '13040'},
			{'date': '06/19/2017', 'type': 'Seller Side', 'amount': '222,500', 'city': 'Burnsville', 'earning': '6938'},
			{'date': '08/10/2017', 'type': 'Buy Side', 'amount': '320,000', 'city': 'Shakopee', 'earning': '6983'},
			{'date': '09/03/2017', 'type': 'Seller Side', 'amount': '290,600', 'city': 'Burnville', 'earning': '6758'},
			{'date': '10/01/2017', 'type': 'Buy Side', 'amount': '620,000', 'city': 'Minnetonka', 'earning': '20892'},
			{'date': '10/20/2017', 'type': 'Seller Side', 'amount': '410,700', 'city': 'Plymouth', 'earning': '12900'},
		]

	}
}
