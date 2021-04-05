import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  jokes = [
    {
      question: 'Why did the guy who lost all his vegetables resort to a life of crime?',
      answer: 'He was left with no choys.',
      jyutpings: [
        {
          ping: 'coi',
          tone: 3
        }
      ],
      character: '菜s',
      revealed: false
    },
    {
      question: 'Why did the cop start shooting after the suspect farted?',
      answer: 'Because he had to hoy cherng.',
      jyutpings: [
        {
          ping: 'hoi',
          tone: 1
        },
        {
          ping: 'coeng',
          tone: 1
        }
      ],
      character: '開槍/開窗',
      revealed: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.jokes);
  }
}
