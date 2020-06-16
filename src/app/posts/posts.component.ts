import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.styl']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    try {
      this.postService.fetch().subscribe((res: any[]) => {
        this.posts = res.map(post => {
          return {
            username: post.username,
            body: post.body,
            date: new Date(post.date),
          };
        });
      });
    } catch (err) {
      console.error(err);
    }
  }

}
