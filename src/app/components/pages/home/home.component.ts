
import { PostService } from './../../posts/post.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { PostI } from '../../../shared/models/post.interface'

//animtions
import{trigger,style,transition,animate, state} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('estado',[
      state('void',style({
        transform: 'translateX(-100%)',
        opacity:0.5
      })),
      transition(':enter',[
        animate(550,style({
          transform:'translateX(0)',
          opacity:1
        }))
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {
  public posts$: Observable<PostI[]>;

  constructor(private postSvc: PostService) { }

  ngOnInit() {
    this.posts$ = this.postSvc.getAllPosts();
  }
}
