import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { HomeMenu } from "../home-menu/home-menu";
// import { HomeMenu } from '/Users/isuruavishka/finemgt/src/pages/home-menu/home-menu.ts';
/*
  Generated class for the Reports page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html'
})
export class ReportsPage3 {
  item:any;
  @ViewChild('barCanvas') barCanvas;
  barChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
    console.log('item'+ JSON.stringify(this.item));

    this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["Speeding", "Overtaking","No-Licence", "Paraking", "Drunk", "Signals"],
                datasets: [{
                    label: '# of Votes',
                    data: [18, 19, 11, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 129, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(55, 159, 64, 19)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
}

    goHome(){
    this.navCtrl.setRoot(HomeMenu);
  }

}
