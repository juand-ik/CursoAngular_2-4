import { Component } from '@angular/core';

import { Task } from './model/task';

@Component
({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: [ 'app.component.css' ]
})

export class AppComponent
{
	/*task1: Task = 
		{
			content: "Learn to code",
			completed: false
		}*/
	/*private tasks = 
			[
				new Task(
					"Buy a monkey",
					false
				),
				new Task
				(
					"Walk to hotel",
					false
				)
			]*/
	private tasks: Task[] = [];
	private currentTask = new Task(null, false);
	
	addTask()
	{
		let task = new Task(this.currentTask.content, this.currentTask.completed);
		this.tasks.push(task);

		this.currentTask.content = null;
	}
}
