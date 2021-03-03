import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

// Services
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  public post: any;

  constructor(private postsService: PostsService) {
    this.post = {
      userId: 1,
      title: 'Prueba',
      body: 'Opinion'
    };
  }

  ngOnInit(): void {
  }


  public addPost(): void {
    this.subscriptions.add(
      this.postsService.addPost(this.post).subscribe((res: any) => {
        console.log(res);
      }, (err: any) => {
        console.log(err);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
