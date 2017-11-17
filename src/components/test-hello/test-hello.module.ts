import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TestHelloComponent } from './test-hello';

@NgModule({
	import: [IonicModule],

	declarations: [TestHelloComponent],
	export: [TestHelloComponent],
})
export class TestHelloComponentModule { }