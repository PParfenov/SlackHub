import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from './../classes/post';
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostService {

  private postsUrl = environment.apiUrl+'/posts';

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
        const outcome = h ? `fetched` : `postId not find`;
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

  getPostsByThreadId(threadId: number): Observable<Post[]> {
    if (!threadId) {
      return of([]);
    }
    return this.http.get<Post[]>(`api/posts/?threadId=${threadId}`).pipe(
      tap(_ => console.log(`found posts matching "${threadId}"`)),
      catchError(this.handleError<Post[]>('searchPosts', []))
    );
  }

  getPostsByUserId(userId: number): Observable<Post[]> {
    if (!userId) {
      return of([]);
    }
    return this.http.get<Post[]>(`api/posts/?threadId=${userId}`).pipe(
      tap(_ => console.log(`found posts matching "${userId}"`)),
      catchError(this.handleError<Post[]>('searchPosts', []))
    );
  }

  searchPosts(term: string): Observable<Post[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Post[]>(`api/posts/?content=${term}`).pipe(
      tap(_ => console.log(`found posts matching "${term}"`)),
      catchError(this.handleError<Post[]>('searchPosts', []))
    );
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
    // return this.http.post<Post>(this.postsUrl, post, httpOptions).pipe(
    //   tap((post: Post) => console.log(`added post w/ postId=${post.postId}`)),
    //   catchError(this.handleError<Post>('addPost'))
    // );
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
