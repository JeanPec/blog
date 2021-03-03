import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm !: FormGroup;

  constructor(private postService : PostsService,
              private router : Router) { }

  ngOnInit(): void {
    this.initpostForm();
  }

  initpostForm(){
    this.postForm = new FormGroup({
      title : new FormControl(),
      content : new FormControl()
    })
  }

  onSubmit(){
    const formValue = this.postForm.value;
    const post = new Post(formValue["title"],formValue["content"]);
    this.postService.addPost(post);
    this.router.navigate(['/posts']);
  }
}
