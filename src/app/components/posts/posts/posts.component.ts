import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

// Services
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  public posts: any;
  public currentDate: any;

  constructor(private postsService: PostsService) {
    this.posts = [];
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public loadPosts(): void {
    this.subscriptions.add(
      this.postsService.getPosts().subscribe((res: any) => {
        this.posts = res;
      }, (err: any) => {
        console.log(err);
      })
    );
  }

}
