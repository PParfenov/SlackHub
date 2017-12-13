import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from './../post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostService {

  private postsUrl = 'api/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
      tap(posts => console.log(`fetched posts`)),
      catchError(this.handleError('getPosts', []))
      );
  }


  getPostNo404<Data>(postId: number): Observable<Post> {
    const url = `${this.postsUrl}/?postId=${postId}`;
    return this.http.get<Post[]>(url)
      .pipe(
      map(posts => posts[0]), 
      tap(h => {
        const outcome = h ? `fetched` : `dpostId not find`;
        console.log(`${outcome} Post postId=${postId}`);
      }),
      catchError(this.handleError<Post>(`getPost postId=${postId}`))
      );
  }

  getPost(postId: number): Observable<Post> {
    const url = `${this.postsUrl}/${postId}`;
    return this.http.get<Post>(url).pipe(
      tap(_ => console.log(`fetched post postId=${postId}`)),
      catchError(this.handleError<Post>(`getPost postId=${postId}`))
    );
  }

  searchPosts(term: string): Observable<Post[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Post[]>(`api/posts/?name=${term}`).pipe(
      tap(_ => console.log(`found posts matching "${term}"`)),
      catchError(this.handleError<Post[]>('searchPosts', []))
    );
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions).pipe(
      tap((post: Post) => console.log(`added post w/ postId=${post.postId}`)),
      catchError(this.handleError<Post>('addPost'))
    );
  }

  deletePost(post: Post | number): Observable<Post> {
    const postId = typeof post === 'number' ? post : post.postId;
    const url = `${this.postsUrl}/${postId}`;

    return this.http.delete<Post>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted post postId=${postId}`)),
      catchError(this.handleError<Post>('deletePost'))
    );
  }

  updatePost(post: Post): Observable<any> {
    return this.http.put(this.postsUrl, post, httpOptions).pipe(
      tap(_ => console.log(`updated post postId=${post.postId}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

}
