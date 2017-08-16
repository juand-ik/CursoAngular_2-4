import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Modulos
import { CardComponent } from './card/card.component';

//Modulos externos
import { JsonpModule, HttpModule } from '@angular/http';

import { WeatherComponent } from './weather-widget/component/weather.component';

import { SpeedUnitPipe } from './weather-widget/pipe/speed-unit.pipe';
import { TempUnitPipe } from './weather-widget/pipe/temp-unit.pipe';

@NgModule({
	imports: [ BrowserModule, FormsModule, JsonpModule, HttpModule ],
	declarations: [ AppComponent, CardComponent, WeatherComponent, SpeedUnitPipe, TempUnitPipe ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
